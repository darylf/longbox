import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactElement,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../hooks/use-graphql";

type StatesIndex = {
  [key: string]: Dispatch<any>;
};

function RegistrationForm(): ReactElement {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>();
  const [register, { data, error }] = useRegisterMutation();
  const states: StatesIndex = {
    email: setEmail,
    password: setPassword,
    name: setName,
  };

  function submitForm(e: FormEvent) {
    e.preventDefault();
    register({
      variables: {
        email: `${email}`,
        password: `${password}`,
        name: `${name}`,
      },
    });
  }

  function onChange(name: string, e: ChangeEvent<HTMLInputElement>) {
    states[name](e.target.value);
  }

  const displayError = error ? <div>Error: {error?.message}</div> : <></>;
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
            type="email"
            name="email"
            onChange={(e) => onChange("email", e)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => onChange("password", e)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => onChange("name", e)}
            required
          />
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

export default RegistrationForm;
