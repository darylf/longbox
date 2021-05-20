import * as React from 'react';
import { ChangeEvent, Dispatch, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../hooks/graphql';
import useAuthenticationToken from './useAuthenticationToken';

type StatesIndex = {
  [key: string]: Dispatch<any>;
};

interface GreetingProps {
  name: string;
}
function Greeting({ name }: GreetingProps): JSX.Element {
  return <div>welcome, {name}</div>;
}

function LoginForm(): JSX.Element {
  const { setToken } = useAuthenticationToken();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const states: StatesIndex = {
    email: setEmail,
    password: setPassword
  };

  function submitForm(e: FormEvent) {
    e.preventDefault();
    login({ variables: { email: `${email}`, password: `${password}` } }).then(
      ({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        if (data?.login?.token !== null && data?.login?.token !== undefined) {
          console.log('Set auth token');
          setToken(data.login.token);
        }
      }
    );
  }

  function onChange(name: string, e: ChangeEvent<HTMLInputElement>) {
    states[name](e.target.value);
  }
  const [login, { data, error }] = useLoginMutation();
  const displayError = error ? <div>Error: {error?.message}</div> : <></>;

  return (
    <div>
      {data?.login?.user?.name ? (
        <>
          <Greeting name={data?.login?.user?.name} />
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <form onSubmit={submitForm}>
          <h1>Login</h1>
          {displayError}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => onChange('email', e)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => onChange('password', e)}
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
