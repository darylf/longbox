import * as React from 'react';
import useCreateBookForm from '../../hooks/useCreateBookForm';
import BookForm from './Form';

function generatePath(data: any): string {
  return `/books/${data?.createBook?.book?.id}`;
}

function NewForm(): JSX.Element {
  const formProps = useCreateBookForm();

  return (
    <div>
      <h1>Create a Book</h1>
      <BookForm {...formProps} successUrl={generatePath} />
    </div>
  );
}

export default NewForm;
