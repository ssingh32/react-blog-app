import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const PostListItem = ({id, title, body, timestamp}) => {
    return (
        <Link className="list-item" to={`edit/${id}`}>
            <div>
                <h3 className="list-item__title">{title}</h3>
                <span className="list-item__sub-title">{moment(timestamp).format('MMMM Do, YYYY')}</span>
            </div>
        </Link>
    );
};