import React from 'react';
import PostForm from '../components/PostForm';
import { startAddPost } from '../actions/posts';
import { connect } from 'react-redux';

class AddPostPage extends React.Component {
    
    onSubmit = (post) => {
        this.props.startAddPost(post);
        this.props.history.push('/');
    }

    render() {
        return (
        <div>
            <h1>Add Post Page</h1>
            <PostForm onSubmit={this.onSubmit}/>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddPost: (post) => dispatch(startAddPost(post))
    }
}

export default connect(undefined, mapDispatchToProps)(AddPostPage);

