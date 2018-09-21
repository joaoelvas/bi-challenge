import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

const PostItem = (item) => {

    return (

        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div>
                <Link to={`/posts/${item.id}`}>
                    <h2>{item.title}</h2>
                </Link>
            </div>
            <div>
                <div>{item.author}</div>
                <div>{item.commentCount}</div>
                <div>
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="small">
                            edit
                        </Button>
                        <Button bsStyle="primary" bsSize="small">
                            delete
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        </div>

    );
};

export default PostItem;