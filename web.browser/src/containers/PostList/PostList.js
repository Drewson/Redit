import React from 'react';
import Post from './../../components/Post';
import PostToolBar from '../../components/PostToolBar'

const PostList = ({ posts, updateVote, sortByDate, sortByUpvotes }) => {
    
    return ( 
      <div> 
            <PostToolBar
                sortByDate={sortByDate}
                sortByUpvotes={sortByUpvotes}
             />
             <div>
                {posts.map(( post ) => 
                ( <Post 
                    post={post}
                    key={post.id}
                    updateVote={updateVote}
                    /> 
                ))}
            </div>
      </div>
    )    
}

export default PostList;

