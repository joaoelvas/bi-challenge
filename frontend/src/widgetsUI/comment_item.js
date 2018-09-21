import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const CommentItem = (item) => {
    return (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <p><b>{item.author}</b> {item.author} </p>
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
        </div>
    );
};

export default CommentItem;