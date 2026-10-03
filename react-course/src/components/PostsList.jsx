import { useLoaderData } from 'react-router-dom';

import Post from "./Post";
import styles from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();

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
      { posts.length > 0 && (
      <ul className={styles.posts}>
        {posts.map((post) => <Post author={post.author} comment={post.comment} key={post.comment} />)}
      </ul>
      )}
      { posts.length === 0 && (<p style={{ textAlign: 'center' }}>No posts here yet.</p>)}
    </>  
  );
}

export default PostsList;