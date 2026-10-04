import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';

import Modal from './Modal';

function NewPost() {
  return (
    <>
      <Modal> 
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="comment">Your comment</label>
            <textarea id="comment" name="comment" required rows={3} />
          </p>

          <p>
            <label htmlFor="author">Your name</label>
            <input type="text" name="author" id="author" required/>
          </p>

          <p className={classes.actions}>
            <Link type="button" to="..">Cancel</Link>
            <button type="submit">Submit</button>
          </p>
        </Form>
      </Modal>  
    </>
  );
}

export default NewPost;

export async function action({request}) {

  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // creates {comment: '...', author: '...'}

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}