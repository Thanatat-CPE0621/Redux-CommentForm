import React, { Component } from 'react'
import  {connect} from 'react-redux'
import Comment from './Comment'
 class ShowComment extends Component {
  render() {
    return (
      <div>
        <h1>All Comment</h1>
       {/* {this.props.comments.map(comment => (<Comment key={comment.id} comment={comment}/>))} */}
       {console.log(this.props.comments)}
      </div>
    )
  }
}
const mapStateTpProps = (state) => {
  return {
    comments:state
   
  }
}

export default connect(mapStateTpProps)(ShowComment);
