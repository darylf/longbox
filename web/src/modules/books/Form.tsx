import * as React from 'react';
import { FormInput, SaveSuccess } from '../../components/form/FormField';

interface FormProps<T> {
  register: unknown;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  variables: { data?: T };
  successUrl: string | ((data?: T) => string);
}

function BookForm<T>({
  register,
  onSubmit,
  variables,
  successUrl
}: FormProps<T>): JSX.Element {
  const { data } = variables;

  const path = typeof successUrl === 'string' ? successUrl : successUrl(data);
  return (
    <form onSubmit={onSubmit}>
      {data && <SaveSuccess successUrl={path} />}

      <FormInput name="alternateTitle" label="Title" register={register} />

      <FormInput name="issue" label="Issue" register={register} />

      <FormInput name="seriesId" label="Series" register={register} />

      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;
