import * as React from 'react';
import { Form, InputBox } from '../../components/form';
import { Book } from '../../hooks/graphql';

interface FormProps<T> {
  register: unknown;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  variables: { data?: T };
  book: Book;
}

function EditBookForm<T>({
  register,
  onSubmit,
  variables,
  book
}: FormProps<T>): JSX.Element {
  const { data } = variables;

  return (
    <Form onSubmit={onSubmit}>
      {data && <div>saved</div>}

      <InputBox
        name="ageRating"
        label="Age Rating"
        defaultValue={book.ageRating}
        register={register}
      />

      <InputBox
        name="alternateTitle"
        label="Title"
        defaultValue={book.alternateTitle}
        register={register}
      />

      <InputBox
        name="format"
        label="Format"
        defaultValue={book.format}
        register={register}
      />

      <InputBox
        name="issue"
        label="Issue"
        defaultValue={book.issue}
        register={register}
      />

      <InputBox
        name="pageCount"
        label="Page Count"
        defaultValue={book.pageCount}
        register={register}
      />

      <InputBox
        name="price"
        label="Price"
        defaultValue={book.price}
        register={register}
      />

      <InputBox
        name="publicationDate"
        label="Publication Date"
        defaultValue={book.publicationDate}
        register={register}
      />

      <InputBox
        name="seriesId"
        label="Series"
        defaultValue={book.series?.id}
        register={register}
      />

      <InputBox
        name="summary"
        label="Summary"
        defaultValue={book.summary}
        register={register}
      />

      <button type="submit">Save</button>
    </Form>
  );
}

export default EditBookForm;
