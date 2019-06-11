import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class PostListFilters extends React.Component {
    state = {
        text : ''
    }

    onSearchChangeHandler = (event) => {
        const text = event.target.value;
        this.setState(() => ({ text }));
        this.props.setTextFilter(text);
    }
    
    render() {
        return (
            <div>
            <input placeholder="Search Posts" onChange={this.onSearchChangeHandler} value={this.state.text}></input>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter : (text) => dispatch(setTextFilter(text))
    }
}

export default connect(undefined, mapDispatchToProps)(PostListFilters);