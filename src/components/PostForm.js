import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class PostForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body : '',
            timestamp: props.post ? moment(props.post.timestamp) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    
    titleChangeHandler = (event) => {
        let title = event.target.value;
        this.setState(() => ({ title }));
    }

    bodyChangeHandler = (event) => {
        let body = event.target.value;
        this.setState(() => ({ body }));
    }

    onDateChange = (timestamp) => {
        if (timestamp) {
          this.setState(() => ({ timestamp }));
        }
    };
      
    onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.title || !this.state.body) {
          this.setState(() => ({ error: 'Please provide title and body.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            title: this.state.title,
            timestamp: this.state.timestamp.valueOf(),
            body: this.state.body
          });
        }
    };

    render() {
       return ( 
        <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Title"
            className="text-input"
            autoFocus
            value={this.state.title}
            onChange={this.titleChangeHandler}
          />
          <SingleDatePicker
            date={this.state.timestamp}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Body of post"
            value={this.state.body}
            onChange={this.bodyChangeHandler}
          >
          </textarea>
  
          <div>
            <button className="button">Save Post</button>
          </div>
        </form>
       );
    }
};