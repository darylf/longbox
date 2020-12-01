import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { PublisherList } from '../components/publisher';

const Publishers = (): JSX.Element => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <h1>create a publisher</h1>
        </Route>

        <Route path={`${match.path}`}>
          <h1>browse</h1>
          <PublisherList />
        </Route>
      </Switch>
    </>
  );
};

export default Publishers;
