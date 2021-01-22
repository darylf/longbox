import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form, List, Show } from '../components/series';

const Series = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/series/new" component={Form} />
        <Route path="/series/:id" component={Show} />
        <Route path="/series" component={List} />
      </Switch>
    </>
  );
};

export default Series;
