import React, { Component } from 'react'
import {connect} from 'react-redux'
 class CommentForm extends Component {
  state = {
    name:'',
    message:''
  }

    handleSumbit = (e)=>{
        e.preventDefault();
        const name = this.state.name
        const message = this.state.message
        this.setState({name:'',message:''})
        
        const data = {
            id:new Date(),
            name,
            message
        }
        this.props.dispatch({
          type:'ADD_COMMENT',data
         
        })
       
    }
    onChange  = (e)=>{
this.setState({
  [e.target.name]:e.target.value
})
    }
  render() {
  
    return (
      <div>
          <h1>Add Comment</h1>
          <form onSubmit={this.handleSumbit}>
              <input type="text" placeholder="Add name" name='name' value={this.state.name} onChange={this.onChange}/> <br />
              <textarea  rows="5" cols="28" placeholder="Message" name='message' value={this.state.message} onChange={this.onChange} /> <br />
              <button>Comment</button>
              
          </form>
        
      </div>
    )
  }
}

export default connect()(CommentForm)
