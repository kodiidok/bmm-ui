import { LOGIN_MUTATION } from '@/gql/mutation';
import styles from '@/styles/auth.module.css';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import client from '../../../graphql-client/graphql-client';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const [loginMutation] = useMutation(LOGIN_MUTATION, { client });

  const handleSignIn = async () => {
    try {
      const { data } = await loginMutation({
        variables: {
          username,
          password,
          rememberMe,
        },
      });
      if (data?.login && data.login.__typename === 'CurrentUser') {
        console.log('Login success');
        setIsLoggedIn(true);
        setUserId(data.login.id);
        const authToken = data?.login?.context?.response?.headers?.get('vendure-auth-token'); // Get the token from the response headers
        localStorage.setItem('vendure-auth-token', authToken); // Store the token
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={styles['form']}>

      {isLoggedIn && <div>userId</div>}

      <div className={styles['field']}>
        <label>Username <span className={styles['asterix']}>*</span></label>
        <input
          type="text"
          placeholder="Your username"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
      </div>

      <div className={styles['field']}>
        <label>Password <span className={styles['asterix']}>*</span></label>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
      </div>

      <div className={styles['options']}>
        <div className={styles['rememberMe']}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label>Remember me</label>
        </div>
        <a>Forgot password?</a>
      </div>

      <div className={styles['button']}>
        <button onClick={handleSignIn}>Sign in</button>
      </div>

    </div>
  );
}