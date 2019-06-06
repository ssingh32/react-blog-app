import React from 'react';
import { Link } from 'react-router-dom';

export const PostListItem = ({id, title, body, timestamp}) => {
    return (
        <div>
            <Link to='edit/123'>
                <span>{title}</span>
            </Link>
        </div>
    );
};