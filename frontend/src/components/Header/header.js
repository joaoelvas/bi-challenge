import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { getCategories } from '../../actions';
import { connect } from 'react-redux';

class Header extends Component {

    componentWillMount() {
        this.props.getCategories()
    }

    renderCategories = (categories) => (
        categories ? 
            categories.map( (item,i) => (
                    <LinkContainer to={item.path} key={i}>
                        <MenuItem>{item.name}</MenuItem>
                    </LinkContainer>
                    
                )
            )
            :
            null
    )

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            BI APP
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="/">
                        <NavItem>
                            All Posts
                        </NavItem>
                    </LinkContainer>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        {
                            this.renderCategories(this.props.posts.categories)
                        }
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getCategories
    },dispatch)
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);