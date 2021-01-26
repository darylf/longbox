import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormField } from '../../components/form';
import { useCreatePublisherMutation } from '../../hooks/graphql';
import { useInput } from '../../hooks/useInput';

const PublisherForm = (): JSX.Element => {
  const { value: nameValue, bind: bindName, reset: resetName } = useInput();

  const [createPublisherMutation, { data }] = useCreatePublisherMutation({
    variables: {
      name: nameValue
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPublisherMutation().then(() => {
      resetName();
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create a Publisher</h1>

      {data && data.createPublisher ? (
        <p>
          Saved!{' '}
          <Link to={`/publishers/${data.createPublisher.publisher?.id}`}>
            View here
          </Link>
        </p>
      ) : null}

      <FormField type="text" label="Name" value={nameValue} bind={bindName} />

      <button>Save</button>
    </Form>
  );
};

export default PublisherForm;
