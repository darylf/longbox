import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const Books = (): JSX.Element => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <h1>create a book</h1>
        </Route>

        <Route path={`${match.path}`}>
          <h1>all books</h1>
        </Route>
      </Switch>
    </>
  );
};

export default Books;
