import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useEditBookMutation } from './graphql';

export interface BookFormData {
  alternateTitle?: string;
  issue?: string;
  seriesId?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useEditBookForm(id: string) {
  const [editBookMutation, { data, loading, error }] = useEditBookMutation();
  const { register, handleSubmit } = useForm<BookFormData>();
  const onSubmit = useCallback((formData: BookFormData) => {
    editBookMutation({
      variables: {
        id,
        attributes: {
          ...formData
        }
      }
    }).then((data) => console.log('Book saved!', data));
    console.log(formData);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    variables: { data, loading, error }
  };
}

export default useEditBookForm;
