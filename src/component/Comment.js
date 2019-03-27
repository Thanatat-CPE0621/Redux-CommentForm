import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.Comment.name}</h2>
        <h2>{this.props.Comment.message}</h2>
        <p></p>
      </div>
    )
  }
}

export default Comment
