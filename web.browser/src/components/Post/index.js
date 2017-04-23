import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle } from 'material-ui/Card';
import 'url-search-params-polyfill';
import FlatButton from 'material-ui/FlatButton';
import { updateVote } from '../../redux/actions';

class Post extends Component {

  upvote(id) {
    this.props.dispatch(updateVote(id));
  }

  render() {
    return (
      <Card style={{ width: '950px', padding: '10px', margin: '20px', position: 'relative' }} >
        <CardTitle titleStyle={{ color: 'darkblue'}} style={{padding: '0px'}} title={ this.props.post.title } />
        <p style={{ padding: '0' }} >{ this.props.post.description }</p>
        <div style={{ display: 'inline-block', width: '80%' }}>
          <FlatButton onClick={() => this.upvote(this.props.post.id)} >
            &#x21e7;
            Vote {this.props.post.votes}
          </FlatButton> 
        </div>
        <div>
          {this.props.post.categories.map(this.props.categoryChips)}
        </div>
      </Card>
    );
  }
}

export default connect()(Post);
