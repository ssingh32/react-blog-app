import React from 'react';
import { Link } from 'react-router-dom';

export const PostListItem = ({id, title, body, timestamp}) => {
    return (
        <div>
            <Link to={`edit/${id}`}>
                <span>{title}</span>
            </Link>
        </div>
    );
};