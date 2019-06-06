import React from 'react';
import { connect } from 'react-redux';
import {PostListItem} from '../components/PostListItem';

export const PostList = (props) => {
    return (
        <div>
            {   props.posts.length == 0 ? 
                ( <span>No Posts</span> )
                : 
                ( 
                props.posts.map((post) => {
                    return <PostListItem key={post.id} {...post}/>
                })
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList);