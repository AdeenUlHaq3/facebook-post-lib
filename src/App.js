import React, { Component } from 'react';
import './App.css';
import Post from './screens/Post';
import PostForm from './screens/PostForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: 'User',
      post: 'Post'
    }
  }

  setUserAndPost = (e, user, post) => {
    e.preventDefault();

    this.setState({
      user,
      post
    })
  }

  render() {
    const {
      setUserAndPost
    } = this;

    const {
      user,
      post
    } = this.state;

   return (
      <div className='App'>
        <PostForm PostForm={{ setUserAndPost }} /><br /><br />
        <Post Post={{ user, post }} />
      </div>
    );
  }
}

export default App;
