import * as React from 'react';
import { useCreateBookMutation } from '../../graphql/generated';

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

  const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
    variables: {
      title: formFields.title
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBookMutation();
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
