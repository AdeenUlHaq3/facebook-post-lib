import React from 'react';
import './index.css';

class PostForm extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {
            user,
            post
        } = this.state;

        const {
            setUserAndPost
        }  = this.props.PostForm;

        return (
            <form onSubmit={ (e) => setUserAndPost(e, user, post) }>
                <h3>Write a post...</h3>
                <input name='user' onChange={ this.handleChange } required placeholder='Username' />
                <textarea name='post' onChange={ this.handleChange } required placeholder='Post'></textarea>
                {/* <input accept="image/*" type="file" required multiple="multiple" /> */}
                <button type='submit'>Post</button>
            </form>
        );
    }
}

export default PostForm;