import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateBookMutation } from './graphql';

export interface BookFormData {
  alternateTitle: string;
  issue: string;
  seriesId: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useCreateBookForm() {
  const [
    createBookMutation,
    { data, loading, error }
  ] = useCreateBookMutation();

  const { register, handleSubmit } = useForm<BookFormData>();
  const onSubmit = useCallback((formData: BookFormData) => {
    createBookMutation({
      variables: {
        attributes: {
          alternateTitle: formData.alternateTitle,
          issue: formData.issue,
          seriesId: formData.issue
        }
      }
    }).then((data) => console.log('Book created!', data));
    console.log(formData);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    createBookMutationVariables: { data, loading, error }
  };
}

export default useCreateBookForm;
