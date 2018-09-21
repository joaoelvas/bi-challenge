import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getPosts, getCategories, addPost } from '../actions';
import { bindActionCreators } from 'redux';
import { Button, ListGroup, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PostItem from '../widgetsUI/post_item';
import {v1 as uuidv1} from 'uuid';


class HomeContainer extends Component {

    state = {
        show: false,
        formdata: {
            title: "",
            body: "",
            author: "",
            category: ""
        }
    }

    componentWillMount() {
        this.props.getCategories()
        this.props.getPosts()
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleSubmit = () => {

    }

    deletePost = (ev) => {

    }

    editPost = (ev) => {

    }

    renderPosts = (posts) => (
        posts ? posts.map((item, i) =>
            <PostItem {...item} onEdit={this.editPost} onDelete={this.deletePost} key={i} />
        ) : null
    )

    renderCategories = (categories) => (
        categories ?
            categories.map((item, i) => (
                <option key={i} value={item.path}>{item.name}</option>
            )
            )
            :
            null
    )

    handleInput = (event,name) => {
        const newFormData = {
            ...this.state.formdata
        }
        newFormData[name] = event.target.value;

        this.setState({
            formdata: newFormData
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        var newFormdata = {
            ...this.state.formdata,
            id: uuidv1(),
            timestamp: Date.now()
        }

        this.props.addPost(newFormdata);

        this.handleClose()
        this.props.getPosts()
        this.renderPosts(this.state.posts)
    }

    render() {

        return (
            <div className="container">
                <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>Add Post</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.submitForm}>
                            <FormControl
                                id="formControlsText"
                                type="text"
                                label="Title"
                                placeholder="Enter title"
                                value={this.state.formdata.title}
                                onChange={(event)=>this.handleInput(event,'title')}
                            />
                            <br/>
                            <FormControl 
                                componentClass="textarea" 
                                placeholder="Enter post body"
                                value={this.state.formdata.body}
                                onChange={(event)=>this.handleInput(event,'body')}
                            />
                            <br/>
                            <FormControl
                                id="formControlsText"
                                type="text"
                                label="Author"
                                placeholder="Enter author"
                                value={this.state.formdata.author}
                                onChange={(event)=>this.handleInput(event,'author')}
                            />
                            <br/>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Category</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" value={this.state.formdata.category} onChange={(event)=>this.handleInput(event,'category')}>
                                    {this.renderCategories(this.props.posts.categories)}
                                </FormControl>
                            </FormGroup>
                            <br/>
                            <Button type="submit">Submit</Button>
                        </form>

                    </Modal.Body>
                </Modal>
                <br/>
                <br/>
                <ListGroup>
                    {this.renderPosts(this.props.posts.posts)}
                </ListGroup>
            </div>

        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPosts,
        getCategories, 
        addPost
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
