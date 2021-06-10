import * as React from 'react';
import { Link } from 'react-router-dom';
export { default as Books } from './books/Books.page';
export { default as Publishers } from './publishers/Publishers.page';
export { default as Series } from './series/Series.page';
export { default as LoginForm } from './auth/LoginForm';
export { default as RegistrationForm } from './auth/RegistrationForm';

export const AdminPage = (): JSX.Element => (
  <div>
    <h1>Admin</h1>
    <ul>
      <li>
        <Link to="/publishers/new">Create Publisher</Link>
      </li>
      <li>
        <Link to="/series/new">Create Series</Link>
      </li>
      <li>
        <Link to="/books/new">Create Book</Link>
      </li>
    </ul>
  </div>
);

export const ComingSoon = (): JSX.Element => (
  <>
    <h1>Coming Soon</h1>
    <p>This page is still under construction</p>
  </>
);

export const HomePage = (): JSX.Element => (
  <>
    <h1>Welcome</h1>
    <Link to="/series">View Book List</Link>
  </>
);
