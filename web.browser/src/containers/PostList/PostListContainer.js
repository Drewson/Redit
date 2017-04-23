import React, { Component } from 'react';
import PostList from './PostList';
import {data} from '../../mock-data';
import Chip from 'material-ui/Chip';


class PostListContainer extends Component {

    constructor(){
        super();
        this.updateVote = this.updateVote.bind(this)
        this.state = {
            posts: data.posts,
            orderby: 'newest'
        }
    }

    sortByUpvotes( posts ){
        let sortedList = posts.sort( function(a, b ){
            return b.votes - a.votes;
        });
        this.setState( { 
            orderby: 'newest', posts : sortedList
        } )
    }

    sortByDate( posts ){
        let sortedList = posts.sort( function(a, b ){
            return b.id - a.id;
        });
        this.setState( { 
            orderby: 'newest',
            posts : sortedList
        } )
    }

    updateVote( postId ){
        this.state.posts.map( (post) => postId === post.id && (
            post.votes += 1
        ));

        this.forceUpdate();
    }

    categoryChips( category ){
        return <Chip style={{ position:'absolute', right: '50px', bottom: '20px' }} >{ category }</Chip>
    }

    render() {
        return ( 
            <div>
                <PostList
                    posts={this.state.posts}
                    categoryChips={this.categoryChips}
                    updateVote={this.updateVote}
                    sortByDate={() => this.sortByDate(this.state.posts)}
                    sortByUpvotes={() => this.sortByUpvotes(this.state.posts)}
                />
            </div>
        )
    }
};

export default PostListContainer;