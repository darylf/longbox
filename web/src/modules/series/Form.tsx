import * as React from 'react';
import { Form } from '../../components/form';
import { FormInput, SaveSuccess } from '../../components/form/FormField';
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

      <FormInput name="name" label="Name" register={register} />

      <FormInput name="publisherId" label="Publisher" register={register} />

      <button>Save</button>
    </Form>
  );
};

export default SeriesForm;
