import * as React from 'react';
import { useParams } from 'react-router-dom';
import useEditBookForm from '../../hooks/useEditBookForm';
import BookForm from './Form';

function generatePath(data: any): string {
  return `/books/${data?.editBook?.book?.id}`;
}

function EditForm(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const formProps = useEditBookForm(id);

  return (
    <div>
      <h1>Edit Book {id}</h1>
      <BookForm {...formProps} successUrl={generatePath} />
    </div>
  );
}

export default EditForm;
