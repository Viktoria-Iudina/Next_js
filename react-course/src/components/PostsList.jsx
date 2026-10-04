import { useLoaderData } from 'react-router-dom';

import Post from "./Post";
import styles from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();

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