import * as React from 'react';

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
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Book submitted`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="series">Name</label>
        <input
          type="name"
          id="name"
          value={formFields.name}
          onChange={createChangeHandler('name')}
        />
      </div>
    </form>
  );
}

export default BookForm;
