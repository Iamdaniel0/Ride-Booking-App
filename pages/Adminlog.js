import { useRef, useState } from 'react';
import Data from './api/data/allUsers';
import { useRouter } from 'next/router';
import classes from './bookings.module.css';

function AdminLog() {
  const router = useRouter();

  const [validationErr, setValidationErr] = useState(' ');
  const [show, setShow] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function showFnc() {
    setShow(!show);
  }

  function submitHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const validation = Data.find((e) => e.email === enteredEmail && e.password === enteredPassword);

    if (validation) {
     
      router.push(`/donate?email=${enteredEmail}`);
    } else {
      setValidationErr(<p className='red'>Incorrect email or password</p>);
    }
  }

  return (
    <div className={classes.section}>
      <div className='Login'>
        <form className='form' onSubmit={submitHandler}>
          <div className={classes.pppp}>
            <h2>Login</h2>
            <label>
              <h4>Email</h4>
            </label>
            <input type='text' placeholder='email' required ref={emailInputRef} className={classes.bbb}></input>
            <br></br>
            <label htmlFor='password'>
              <h4>Enter Password</h4>
            </label>
            <input id='password' required placeholder='password' type={show ? 'text' : 'password'} ref={passwordInputRef} className={classes.bbb}></input>
            <button type='button' id="spanbtn" onClick={showFnc}>{show ? 'Hide' : 'Show'}</button>
            <br></br>
            <button id="submit" type='submit' className={classes.lll}>Login</button>
          </div>
          {validationErr}
        </form>
      </div>
    </div>
  );
}

export default AdminLog;