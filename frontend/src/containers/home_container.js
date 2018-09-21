import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getPosts, getCategories } from '../actions';
import { bindActionCreators } from 'redux';
import { Button, ListGroup, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PostItem from '../widgetsUI/post_item';


class HomeContainer extends Component {

    state = {
        show: false,
        formData: {
            id: "",
            title: "",
            timestamp: "",
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

render() {
    return (
        <div className="container">
            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>Add Post</Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Title"
                            placeholder="Enter title"
                        />
                        <FormControl
                            id="formControlsText"
                            type="text"
                            label="Title"
                            placeholder="Enter title"
                            value={this.state.title}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Enter post body" />
                        </FormGroup>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Author"
                            placeholder="Enter author"
                        />

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                {this.renderCategories(this.props.posts.categories)}
                            </FormControl>
                        </FormGroup>

                        <Button type="submit">Submit</Button>
                    </form>

                </Modal.Body>
            </Modal>

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
        getCategories
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
