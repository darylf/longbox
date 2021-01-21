import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form, List } from '../components/series';

const Series = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/series/new">
          <Form />
        </Route>

        <Route path="/series">
          <List />
        </Route>
      </Switch>
    </>
  );
};

export default Series;
