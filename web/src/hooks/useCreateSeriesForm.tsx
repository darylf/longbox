import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateSeriesMutation } from './graphql';

export interface SeriesFormData {
  name: string;
  publisherId: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useCreateSeriesForm() {
  const [
    createSeriesMutation,
    { data, loading, error }
  ] = useCreateSeriesMutation();

  const { register, handleSubmit } = useForm<SeriesFormData>();
  const onSubmit = useCallback((formData: SeriesFormData) => {
    createSeriesMutation({
      variables: {
        ...formData
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

export default useCreateSeriesForm;
