import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form, List, Show } from '.';

const Publishers = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/publishers/new" component={Form} />
        <Route path="/publishers/:id" component={Show} />
        <Route path="/publishers" component={List} />
      </Switch>
    </>
  );
};

export default Publishers;
