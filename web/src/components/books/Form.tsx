import * as React from 'react';
import { useMutation, gql } from '@apollo/client';

const SAVE_BOOK = gql`
  mutation CreateBook($title: String!) {
    createBook(title: $title) {
      book {
        id
        title
      }
      errors {
        message
      }
    }
  }
`;

interface BookResult {
  book: {
    id: number;
    title: string;
  };
}
interface NewBookDetails {
  title: string;
}

function useFormFields<T>(initialValues: T) {
  const [formFields, setFormFields] = React.useState<T>(initialValues);
  const createChangeHandler = (key: keyof T) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setFormFields((prev: T) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler };
}

function BookForm(): JSX.Element {
  const { formFields, createChangeHandler } = useFormFields({
    title: ''
  });

  const [saveBook, { data }] = useMutation<
    { createBook: BookResult },
    { title: string }
  >(SAVE_BOOK, {
    variables: { title: formFields.title },
    onCompleted({ createBook }) {
      console.log('Book Created', createBook);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBook({ variables: { title: formFields.title } });
  };

  return (
    <form onSubmit={handleSubmit}>
      {data && data.createBook ? <p>Saved!</p> : null}
      <div>
        <label htmlFor="title">Name</label>
        <input
          type="textbox"
          id="title"
          value={formFields.title}
          onChange={createChangeHandler('title')}
        />
      </div>
      <button>Save</button>
    </form>
  );
}

export default BookForm;
