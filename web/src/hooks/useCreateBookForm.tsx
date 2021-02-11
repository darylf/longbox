import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateBookMutation } from './graphql';

export interface BookFormData {
  ageRating: string;
  alternateTitle: string;
  format: string;
  issue: string;
  pageCount: string;
  price: string;
  publicateDate: string;
  seriesId: string;
  summary: string;
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
          ...formData
        }
      }
    }).then((data) => console.log('Book created!', data));
    console.log(formData);
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    variables: { data, loading, error }
  };
}

export default useCreateBookForm;
