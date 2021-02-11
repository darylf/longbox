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

      <FormInput name="ageRating" label="Age Rating" register={register} />

      <FormInput name="alternateTitle" label="Title" register={register} />

      <FormInput name="format" label="Format" register={register} />

      <FormInput name="issue" label="Issue" register={register} />

      <FormInput name="pageCount" label="Page Count" register={register} />

      <FormInput name="price" label="Price" register={register} />

      <FormInput
        name="publicationDate"
        label="Publication Date"
        register={register}
      />

      <FormInput name="seriesId" label="Series" register={register} />

      <FormInput name="summary" label="Summary" register={register} />

      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;
