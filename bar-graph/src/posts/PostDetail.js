import React, {Component} from 'react'

class PostDetail extends Component{
  render() {
    const {post} = this.props
    return (
      <div >
        <h1> {post.date}</h1>
        <p> {post.content}</p>
      </div>
    )
  }
}

export default PostDetail