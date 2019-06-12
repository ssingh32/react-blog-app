import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByTitle } from '../actions/filters';

export class PostListFilters extends React.Component {
    state = {
        text: ''
    }

    onSearchChangeHandler = (event) => {
        const text = event.target.value;
        this.setState(() => ({ text }));
        this.props.setTextFilter(text);
    }

    onOptionSelected = (event) => {
        const value = event.target.value;
        if (value === 'title') {
            this.props.sortByTitle();
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input placeholder="Search Posts" onChange={this.onSearchChangeHandler} value={this.state.text}></input>
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={this.onOptionSelected} >
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByTitle: () => dispatch(sortByTitle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);