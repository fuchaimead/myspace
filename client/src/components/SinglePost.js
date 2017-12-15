import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Container, Header, Button } from 'semantic-ui-react';

class SinglePost extends Component {
  state = { post: {} }; 

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/posts/${id}`)
      .then( res => {
        this.setState({ post: res.data, loaded: true });
      })
      .catch( err => {
        console.log(err);
    });
  }

  deletePost = (id) => {
    window.confirm("Delete Post?")
    axios.delete(`/api/posts/${id}`)
    .then( () => {
      const { posts } = this.state;
      this.setState({ posts: posts.filter( p => p.id !== id ) })
    })
  }


  render(){
    // const { post } = this.state.post
    const { id, deletePost } = this.state.post
    return (
      <Container> 
      <Header> {this.state.post.name} </Header> 
      {this.state.post.body}
      <Button onClick={() => this.deletePost(id)}> Delete </Button> 
      <Button> Edit </Button> 
      </Container> 
    )
  } 

}

export default SinglePost;