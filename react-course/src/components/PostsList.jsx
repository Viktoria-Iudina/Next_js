import { useState, useEffect } from 'react';
import Post from "./Post";
import styles from './PostsList.module.css';

function PostsList() {

  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      // start fetching data
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      // stop fetching data...
      // ...to prevent fetching infinite loop
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
      <ul className={styles.posts}>
        {posts.map((post) => <Post author={post.author} comment={post.comment} key={post.comment} />)}
      </ul>
      )}
      {!isFetching && posts.length === 0 && (<p style={{ textAlign: 'center' }}>No posts here yet.</p>)}
      {isFetching && <p>Loading posts...</p>}
    </>  
  );
}

export default PostsList;