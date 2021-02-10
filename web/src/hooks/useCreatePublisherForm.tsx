import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePublisherMutation } from './graphql';

export interface PublisherFormData {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useCreatePublisherForm() {
  const [
    createPublisherMutation,
    { data, loading, error }
  ] = useCreatePublisherMutation();

  const { register, handleSubmit } = useForm<PublisherFormData>();
  const onSubmit = useCallback((formData: PublisherFormData) => {
    createPublisherMutation({
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

export default useCreatePublisherForm;
