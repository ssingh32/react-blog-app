import React from 'react';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { startEditPost } from '../actions/posts';

export class EditPostPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <h1>Edit Post Page</h1>
                {console.log(this.props.post)}
                <PostForm post={this.props.post} onSubmit={this.onSubmit}/>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find((post) => post.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditPost: (postID, post) => dispatch(startEditPost(postID, post))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);