import * as React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (): JSX.Element => (
  <>
    <h1>Welcome</h1>
    <Link to="/series">View Book List</Link>
  </>
);

export default HomePage;
