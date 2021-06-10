import * as React from 'react';
import { useParams } from 'react-router-dom';
import useCreateBookForm from '../../hooks/useCreateBookForm';
import BookForm from '../books/Form';

function generatePath(data: any): string {
  return `/books/${data?.createBook?.book?.id}`;
}

function NewForm(): JSX.Element {
  const formProps = useCreateBookForm();

  const { id: seriesId } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Create a Book for {seriesId}</h1>
      <BookForm seriesId={seriesId} {...formProps} successUrl={generatePath} />
    </div>
  );
}

export default NewForm;
