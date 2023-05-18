import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

 
    const fetchPosts = async () => {
      
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      }
    
useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='row container d-flex align-item-center'>
      <h1>Post List</h1>
      
        <div className='d-flex flex-wrap alin-content-center m-5'>
            
                {posts.map((post) => (
                    <div className='card m-2 p-2' style={{width: '18rem'}} key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    ))}
          </div>
            
        
    </div>
  );
};

export default PostList;
