import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostDetails, getPostComments } from '../../actions';
import { ButtonToolbar, Button, ListGroup } from 'react-bootstrap';
import CommentItem from '../../widgetsUI/comment_item';

class PostView extends Component {

    componentWillMount() {
        this.props.getPostDetails(this.props.match.params.id)
        this.props.getPostComments(this.props.match.params.id)
    }

    renderComments = () => {
        let comments = this.props.posts.comments;

        return comments ?
            comments.map((item,i) => (
                <CommentItem key={i} {...item} />
            ))

        :
        null
    }

    renderPost = (post) => (
        post ?
            <div className="container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Author - {post.author}</p>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small">
                        edit
                    </Button>
                    <Button bsStyle="primary" bsSize="small">
                        delete
                    </Button>
                    <Button bsStyle="primary" bsSize="small">
                        upvote
                    </Button>
                    <Button bsStyle="primary" bsSize="small">
                        downvote
                    </Button>
                </ButtonToolbar>
                
                <p>Score - {post.voteScore}</p>
                <div>
                    <h3>Comments</h3>
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="small">
                            Add Comment
                        </Button>
                    </ButtonToolbar>

                    <div>
                        <ListGroup>
                            {this.renderComments()}
                        </ListGroup>
                    </div>

                </div>
            </div>

            : null
    )

    render() {
        let post = this.props.posts.post;
        return (
            <div>
                {this.renderPost(post)}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostDetails,
        getPostComments
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);