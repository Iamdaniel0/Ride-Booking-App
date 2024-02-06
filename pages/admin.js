import { useRef, useState } from "react";
import classes from './bookings.module.css';
import Data from "./api/data/allUsers";
import { useRouter } from "next/router";

function Admin() {
    const router = useRouter();
    const { email } = router.query;
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
            // Redirect to the "bookings" page
            router.push('/bookings');
        } else {
            setValidationErr(<p className={classes.red}>Incorrect email or password</p>);
        }
    }

    return (
        <div className={classes.admin}>
            <h1>Admin</h1>

            <div className={classes.inputs}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.section}>
                        <label htmlFor="email">Email</label>
                        <div className={classes.input}>
                            <input
                                placeholder='Input Email'
                                id="email"
                                required
                                ref={emailInputRef}
                            />
                        </div>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor="password">Password</label>
                        <div className={classes.input}>
                            <input
                                type={show ? 'text' : 'password'}
                                name='password'
                                placeholder='Input Password'
                                id="password"
                                required
                                ref={passwordInputRef}
                            />
                        </div>
                        <span><button type='button' id="spanbtn" onClick={showFnc}>{show ? 'Hide' : 'Show'}</button></span>
                    </div>

                    <button id="submit" type='submit'>Login</button>

                    {validationErr}
                </form>
            </div>
        </div>
    )
}

export default Admin;
