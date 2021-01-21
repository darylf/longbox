import * as React from 'react';
import { useInput } from '../../hooks/useInput';
import { Form, FormField } from '../form';
import { useCreateSeriesMutation } from '../../graphql/generated';
import { Link } from 'react-router-dom';

const SeriesForm = (): JSX.Element => {
  const { value: nameValue, bind: bindName } = useInput();

  const [createSeriesMutation, { data }] = useCreateSeriesMutation({
    variables: {
      name: nameValue,
      publisherId: '1'
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createSeriesMutation().then((data) => console.log(data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create a Series</h1>

      {data && data.createSeries ? (
        <p>
          Saved!{' '}
          <Link to={`/series/${data.createSeries.series?.id}`}>View here</Link>
        </p>
      ) : null}

      <FormField type="text" label="Name" value={nameValue} bind={bindName} />

      <button>Save</button>
    </Form>
  );
};

export default SeriesForm;
