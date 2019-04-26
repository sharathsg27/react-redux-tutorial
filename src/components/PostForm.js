import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {createPost} from "../actions/postAction";

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            body: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor={'title'}>Title:</label>
                        <input type={'text'} name={'name'} value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor={'body'}>Body:</label>
                        <input type={'text'} name={'body'} value={this.state.body} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(PostForm);
