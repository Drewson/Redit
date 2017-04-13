import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {data} from '../../mock-data';
import Chip from 'material-ui/Chip';


class Post extends Component {

  categoryChips( category, i ){
    return <Chip style={{ position:'absolute', right: '50px', bottom: '20px' }} >{ category }</Chip>
  }

  makePost( post, i ){
    return (
      <Card key={i} style={{ width: '700px', padding: '10px', margin: '20px', position: 'relative' }} >
        <CardTitle style={{ color: 'blue', padding: '0'}} title={ post.title } />
        <CardHeader style={{}} >{ post.description }</CardHeader>
        <div style={{ display: 'inline-block', width: '80%' }}>
          <p style={{ display: 'inline-block' }} >Vote </p> {post.votes}
        </div>
        <div>
          {post.categories.map( this.categoryChips )}
        </div>
      </Card>
    )
  }

  render() {
    return ( 
      <div>
        {data.posts.map(( post, i ) => this.makePost( post, i ))}
      </div>
    )
  }
};

export default Post;