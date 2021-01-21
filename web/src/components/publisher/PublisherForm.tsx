import * as React from 'react';
import { useInput } from '../../hooks/useInput';
import { Form, FormField } from '../form';
import { useCreatePublisherMutation } from '../../graphql/generated';
import { Link } from 'react-router-dom';

const PublisherForm = (): JSX.Element => {
  const { value: nameValue, bind: bindName } = useInput();

  const [createPublisherMutation, { data }] = useCreatePublisherMutation({
    variables: {
      name: nameValue
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPublisherMutation().then((data) => console.log(data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create a Publisher</h1>

      {data && data.createPublisher ? (
        <p>
          Saved!{' '}
          <Link to={`/book/${data.createPublisher.publisher?.id}`}>
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
