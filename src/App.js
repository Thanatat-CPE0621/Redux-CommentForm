import React, { Component } from 'react';
import CommentForm from './component/CommentForm'
import ShowComment from './component/ShowComment'

class App extends Component {
  render() {
    return (
      <div>
        <CommentForm />
        <ShowComment />
      </div>
    );
  }
}

export default App;
