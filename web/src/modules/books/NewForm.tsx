import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '../../components/form/FormField';
import useCreateBookForm from '../../hooks/useCreateBookForm';

function BookForm(): JSX.Element {
  const {
    register,
    onSubmit,
    createBookMutationVariables
  } = useCreateBookForm();
  const { data } = createBookMutationVariables;

  return (
    <form onSubmit={onSubmit}>
      <h1>Create a Book</h1>

      <SaveSuccess id={data?.createBook?.book?.id} />

      <FormInput name="alternateTitle" label="Title" register={register} />

      <FormInput name="issue" label="Issue" register={register} />

      <FormInput name="seriesId" label="Series" register={register} />

      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;

interface SSProps {
  id: string | undefined;
}

/**
 * @deprecated This component is tempoary and should be replaced
 */
const SaveSuccess = ({ id }: SSProps): JSX.Element =>
  id ? (
    <div>
      Successfully Saved! <Link to={`'/books/${id}`}>View here</Link>
    </div>
  ) : (
    <></>
  );
