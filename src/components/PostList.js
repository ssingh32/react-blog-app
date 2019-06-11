import React from 'react';
import { connect } from 'react-redux';
import {PostListItem} from '../components/PostListItem';
import getVisiblePost from '../selectors/posts';

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

const mapStateToProps = (state, props) => {
    return {
        posts: getVisiblePost(state.posts, {})
    }
}

export default connect(mapStateToProps)(PostList);