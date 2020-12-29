import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BookForm, BookList, BookProfile } from '../components/books';

const Books = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/books/new" component={BookForm} />
        <Route exact path="/books/:id" component={BookProfile} />
        <Route path="/books" component={BookList} />
      </Switch>
    </>
  );
};

export default Books;
