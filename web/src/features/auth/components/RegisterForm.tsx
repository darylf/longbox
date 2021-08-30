/* eslint-disable */
import { FormHelperText } from "@chakra-ui/react";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactElement,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../../hooks/use-graphql";

type StatesIndex = {
  [key: string]: Dispatch<any>;
};

function RegisterForm(): ReactElement {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [register, { data, error }] = useRegisterMutation();
  const states: StatesIndex = {
    email: setEmail,
    password: setPassword,
    username: setUsername,
  };

  function submitForm(e: FormEvent) {
    e.preventDefault();
    register({
      variables: {
        email: `${email}`,
        password: `${password}`,
        username: `${username}`,
      },
    });
  }

  function onChange(key: string, e: ChangeEvent<HTMLInputElement>) {
    states[key](e.target.value);
  }

  const displayError = error ? (
    <div>
      Error:
      {error?.message}
    </div>
  ) : (
    <></>
  );
  const displaySuccess = data ? <div>Registration successful</div> : <></>;

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Register</h1>
        {displayError}
        {displaySuccess}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => onChange("email", e)}
            required
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => onChange("password", e)}
            required
          />
          <FormHelperText>
            <p>Your password must:</p>
            <ul>
              <li>Be at least six characters long</li>
              <li>Contain one or more numbers</li>
              <li>
                Include at least one of the following special characters:
                !"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{"{"}|{"}"}~, or a space
              </li>
            </ul>
          </FormHelperText>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={(e) => onChange("username", e)}
            required
          />
          <FormHelperText>
            Your username should be between 2 and 15 characters, begin with a
            letter and contain only letters, numbers, '_' or '-'
          </FormHelperText>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
      </form>
    </div>
  );
}

export { RegisterForm };
