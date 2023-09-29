import { AUTHENTICATE, LOGIN_MUTATION } from '@/gql/mutation';
import styles from '@/styles/auth.module.css';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import client from '../../../graphql-client/graphql-shop-client';
import 'react-toastify/dist/ReactToastify.css';
import { IconExclamationCircle } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { ACTIVE_CHANNEL, ACTIVE_CUSTOMER } from '@/gql/query';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [invalidCredentialsError, setInvalidCredentialsError] = useState(false);
  const [authenticationError, setAuthenticationError] = useState(false);
  const [notVerifiedError, setNotVerifiedError] = useState(false);
  const [loginMutation] = useMutation(LOGIN_MUTATION, { client });
  const [authenticate] = useMutation(AUTHENTICATE, { client });
  
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      // send login data
      const { data } = await loginMutation({
        variables: {
          username,
          password,
          rememberMe,
        },
      });
      console.log(JSON.stringify(data));
      // check if the user login credentials are valid
      if (data?.login && data.login.__typename === 'CurrentUser') {
        setIsLoggedIn(true);
        setInvalidCredentialsError(false);

        // send data to authenticate user
        const { data } = await authenticate({
          variables: {
            username,
            password,
          }
        });

        // check if the user is authenticated or not
        const channels = data?.authenticate.channels;
        if (channels && channels[0].permissions[0] === "Authenticated") {
          setAuthenticationError(false);
          setUserId(data.login.id);
          // const authToken = data?.login?.context?.response?.headers?.get('vendure-auth-token'); // Get the token from the response headers
          // localStorage.setItem('vendure-auth-token', authToken); // Store the token
          console.log(data);
          router.push('/store');
        } else {
          console.log('authentication failed', data);
          setAuthenticationError(true);
        }

      } else {
        setIsLoggedIn(false);
        setUserId(null);

        if (data.login.__typename === 'InvalidCredentialsError') {
          console.log('login failed', data);
          setInvalidCredentialsError(true);
        }

        if (data.login.__typename === 'NotVerifiedError') {
          console.log('login failed', data);
          setNotVerifiedError(true);
        }

        // if (data.login.__typename === 'NativeAuthStrategyError') {
        //   console.log('login failed', data);
        //   setNotVerifiedError(true);
        // }
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={styles['form']}>

      {invalidCredentialsError &&
        <div className={styles['toast']}>
          <IconExclamationCircle size={20} />
          Invalid Credentials
        </div>
      }

      {authenticationError &&
        <div className={styles['toast']}>
          <IconExclamationCircle size={20} />
          Authentication Failed
        </div>
      }

      {notVerifiedError &&
        <div className={styles['toast']}>
          <IconExclamationCircle size={20} />
          User Not Verified
        </div>
      }

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