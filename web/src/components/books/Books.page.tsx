import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EditForm, List, NewForm, Show } from '.';

const Books = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/books/new" component={NewForm} />
        <Route exact path="/books/:id/edit" component={EditForm} />
        <Route exact path="/books/:id" component={Show} />
        <Route path="/books" component={List} />
      </Switch>
    </>
  );
};

export default Books;
