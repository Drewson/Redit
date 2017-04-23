import React from 'react';
import Post from './../../components/Post';


const PostList = ({ posts, updateVote, categoryChips }) => {
    
    return ( 
      <div> 
             <div>
                {posts.map(( post ) => 
                ( <Post 
                    categoryChips={categoryChips}
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

