import * as React from 'react';
import { Form, InputBox, SaveSuccess } from '../../components/form';
import useCreateSeriesForm from '../../hooks/useCreateSeriesForm';

function generatePath(data: any): string {
  return `/series/${data?.createSeries?.series?.id}`;
}

const SeriesForm = (): JSX.Element => {
  const { register, onSubmit, variables } = useCreateSeriesForm();
  const { data } = variables;

  return (
    <Form onSubmit={onSubmit}>
      <h1>Create a Series</h1>

      <SaveSuccess successUrl={generatePath(data)} />

      <InputBox name="name" label="Name" register={register} />

      <InputBox name="publisherId" label="Publisher" register={register} />

      <button>Save</button>
    </Form>
  );
};

export default SeriesForm;
