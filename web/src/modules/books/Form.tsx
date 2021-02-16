import * as React from 'react';
import { Form, InputBox, SaveSuccess } from '../../components/form';

interface FormProps<T> {
  register: unknown;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  variables: { data?: T };
  successUrl: string | ((data?: T) => string);
  seriesId?: string;
}

function BookForm<T>({
  register,
  onSubmit,
  variables,
  successUrl,
  seriesId
}: FormProps<T>): JSX.Element {
  const { data } = variables;
  const path = typeof successUrl === 'string' ? successUrl : successUrl(data);

  return (
    <Form onSubmit={onSubmit}>
      {data && <SaveSuccess successUrl={path} />}

      <InputBox name="ageRating" label="Age Rating" register={register} />

      <InputBox name="alternateTitle" label="Title" register={register} />

      <InputBox name="format" label="Format" register={register} />

      <InputBox name="issue" label="Issue" register={register} />

      <InputBox name="pageCount" label="Page Count" register={register} />

      <InputBox name="price" label="Price" register={register} />

      <InputBox
        name="publicationDate"
        label="Publication Date"
        register={register}
      />

      <InputBox
        name="seriesId"
        label="Series"
        defaultValue={seriesId}
        register={register}
      />

      <InputBox name="summary" label="Summary" register={register} />

      <button type="submit">Save</button>
    </Form>
  );
}

export default BookForm;
