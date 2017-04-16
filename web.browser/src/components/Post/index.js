import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';

function categoryChips( category ){
    return <Chip style={{ position:'absolute', right: '50px', bottom: '20px' }} >{ category }</Chip>
  }

const Post = ({ post, updateVote}) => (
  <Card style={{ width: '950px', padding: '10px', margin: '20px', position: 'relative' }} >
    <CardTitle titleStyle={{ color: 'darkblue'}} style={{padding: '0px'}} title={ post.title } />
    <p style={{padding: '0'}} >{ post.description }</p>
    <div style={{ display: 'inline-block', width: '80%' }}>
      <FlatButton onClick={() => updateVote( post.id )} >
        &#x21e7;
        Vote {post.votes}
      </FlatButton> 
    </div>
    <div>
      {post.categories.map( categoryChips )}
    </div>
  </Card>
)

export default Post;