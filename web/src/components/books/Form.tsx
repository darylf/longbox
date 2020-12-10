import * as React from 'react';
import { useQuery, gql } from '@apollo/client';

const SERIES_DROPDOWN_QUERY = gql`
  {
    seriesList {
      id
      name
    }
  }
`;

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
    name: '',
    seriesId: 0
  });

  const { data } = useQuery(SERIES_DROPDOWN_QUERY);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Book submitted`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="series">Series</label>
        <select name="series_id" id="series_id">
          {data && (
            <>
              {data.seriesList.map((s: { id: number; name: string }) => (
                <option key={s.id}>{s.name}</option>
              ))}
            </>
          )}
        </select>
      </div>

      <div>
        <label htmlFor="name">Name</label>
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
