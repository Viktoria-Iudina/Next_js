import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './NewPost.module.css';

import Modal from './Modal';

function NewPost({ onAddPost }) {

  const [enteredText, setEnteredText] = useState('Your text...');
  const [enteredName, setEnteredName] = useState('Your name...');

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      comment: enteredText,
      author: enteredName
    };
    onAddPost(postData);
  }

  return (
    <>
      <Modal> 
        <form className={classes.form} onSubmit={submitHandler}>
          <p>
            <label htmlFor="comment">Your comment</label>
            <textarea id="comment" required rows={3} onChange={textChangeHandler} />
          </p>

          <p>
            <label htmlFor="author">Your name</label>
            <input type="text" id="author" required onChange={nameChangeHandler} />
          </p>

          <p className={classes.actions}>
            <Link type="button" to="..">Cancel</Link>
            <button type="submit">Submit</button>
          </p>
        </form>
      </Modal>  
    </>
  );
}

export default NewPost;