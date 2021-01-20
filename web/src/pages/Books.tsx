import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { EditForm, NewForm, List, Profile } from '../components/books';

const Books = (): JSX.Element => {
  return (
    <>
      <Link to={'/books/new'}>Create a book</Link>
      <Switch>
        <Route exact path="/books/new" component={NewForm} />
        <Route exact path="/books/:id/edit" component={EditForm} />
        <Route exact path="/books/:id" component={Profile} />
        <Route path="/books" component={List} />
      </Switch>
    </>
  );
};

export default Books;
