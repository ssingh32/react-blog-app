import React from 'react';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';

const EditPostPage = (props) => {
    return (
        <div>
            <h1>Edit Post Page</h1>
            {console.log(props.post)}
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find((post) => post.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditPostPage);