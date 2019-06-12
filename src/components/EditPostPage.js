import React from 'react';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { startEditPost } from '../actions/posts';
import { startRemovePost } from '../actions/posts';
import { Link } from 'react-router-dom';
import RemovePostModal from '../components/RemovePostModal';

export class EditPostPage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        modalOpen: false
    };

    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
    }

    onRemovePost = () => {
        this.props.startRemovePost({ id: this.props.post.id });
        this.props.history.push('/');
    }

    handleModalOption = () => {
        this.setState(() => ({modalOpen: !this.state.modalOpen}))
    }
  
    clearSelectedOption = () => {
      this.setState(() => ({modalOpen: false}))
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Post</h1>
                    </div>
                </div>
                <div className="content-container">
                    <Link to={`/read/${this.props.post.id}`}>
                    Post readable at: http://{window.location.hostname}/read/{this.props.post.id}
                    </Link>
                </div>
                <div className="content-container">
                    <PostForm post={this.props.post} onSubmit={this.onSubmit} />
                    <button className="button button--secondary" onClick={this.handleModalOption}>Remove Post</button>
                    <RemovePostModal 
                    handleModalOption={this.handleModalOption} 
                    clearSelectedOption={this.clearSelectedOption} 
                    onRemovePost={this.onRemovePost} 
                    modalOpen={this.state.modalOpen}
                    />
                </div>
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
        startEditPost: (postID, post) => dispatch(startEditPost(postID, post)),
        startRemovePost: (id) => dispatch(startRemovePost(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);