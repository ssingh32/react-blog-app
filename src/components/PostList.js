import React from 'react';
import { connect } from 'react-redux';
import { PostListItem } from '../components/PostListItem';
import getVisiblePost from '../selectors/posts';

export const PostList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Posts</div>
                <div className="show-for-desktop">Post</div>
            </div>
            <div className="list-body">
                {
                    props.posts.length === 0 ? (
                        <div>
                            <span className="list-item list-item--message">No Posts</span>
                        </div>
                    ) : (
                            props.posts.map((post) => {
                                return <PostListItem key={post.id} {...post} />
                            })
                        )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        posts: getVisiblePost(state.posts, state.filters)
    }
}

export default connect(mapStateToProps)(PostList);