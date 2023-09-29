import { useState, useEffect } from 'react';
import LoginForm from './loginForm';
import styles from '@/styles/auth.module.css';
import SignUpForm from './signupForm';

function ctaSignUp(setNewUser: (value: boolean) => void) {
    return (
        <div className={styles['callToAction']}>
            Do not have an account yet? {' '}
            <a onClick={(e: any) => {
                e.preventDefault();
                setNewUser(true);
            }}>Create account</a>
        </div>
    );
}

function ctaLogin(setNewUser: (value: boolean) => void) {
    return (
        <div className={styles['callToAction']}>
            Already a member? {' '}
            <a onClick={(e: any) => {
                e.preventDefault();
                setNewUser(false);
            }}>Log in to your account</a>
        </div>
    );
}

export function ShopAuthenticationForm() {
    const [newUser, setNewUser] = useState(false);
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    // This useEffect will only run once, during the first render
    useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    return (
        <div className={styles['outerContainer']}>
            {initialRenderComplete ? (
                <div className={styles['authFormContainer']}>
                    <div className={styles['subContainer']}>
                        <h1>Sign {!newUser ? 'In' : 'Up'}</h1>
                        {!newUser ? ctaSignUp(() => setNewUser(true)) : ctaLogin(() => setNewUser(false))}
                    </div>
                    <div className={styles['subContainer']}>
                        {!newUser ? <LoginForm /> : <SignUpForm />}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
