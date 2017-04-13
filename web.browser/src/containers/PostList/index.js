import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {data} from '../../mock-data';
import Post from './../../components/Post';


let post = new Post();

class PostList extends Component {

  createPosts(post, i){
    return (
      Post.buildPost(post, i)
    )
  }

  render() {
    return ( 
      <Post />
    )
  }
};

export default PostList;