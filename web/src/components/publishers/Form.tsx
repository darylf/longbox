import * as React from 'react';
import { Form, InputBox, SaveSuccess } from '../../components/form';
import useCreatePublisherForm from '../../hooks/useCreatePublisherForm';

function generatePath(data: any): string {
  return `/books/${data?.createPublisher?.publisher?.id}`;
}

const PublisherForm = (): JSX.Element => {
  const { register, onSubmit, variables } = useCreatePublisherForm();
  const { data } = variables;

  return (
    <Form onSubmit={onSubmit}>
      <h1>Create a Publisher</h1>

      {data && <SaveSuccess successUrl={generatePath(data)} />}

      <InputBox name="name" label="Name" register={register} />

      <button>Save</button>
    </Form>
  );
};

export default PublisherForm;
