import * as React from 'react';
import {
  useCreateBookMutation,
  useSeriesListQuery
} from '../../graphql/generated';
import styled from 'styled-components';
import { useInput, useSelectInput } from '../../hooks/useInput';
import { FormField } from './FormField';
import DropDown, { ListItem } from '../DropDown';
import { Link } from 'react-router-dom';

function BookForm(): JSX.Element {
  // const { formFields, createChangeHandler } = useFormFields(defaultValues);
  const { value: titleValue, bind: bindTitle } = useInput();
  const { value: issueValue, bind: bindIssue } = useInput();
  const { value: formatValue, bind: bindFormat } = useInput();
  const { value: seriesValue, bind: bindSeries } = useSelectInput();

  const { data: dataSeries } = useSeriesListQuery();
  const itemData: Array<ListItem> =
    dataSeries?.seriesList.nodes?.map((item) => {
      return { label: `${item?.name}`, value: `${item?.id}` } as ListItem;
    }) || [];

  const [createBookMutation, { data }] = useCreateBookMutation({
    variables: {
      attributes: {
        alternateTitle: titleValue,
        issue: issueValue,
        seriesId: seriesValue
      }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title: titleValue,
      issue: issueValue,
      seriesId: seriesValue
    });
    createBookMutation().then((data) => console.log(data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create a Book</h1>

      {data && data.createBook ? (
        <p>
          Saved! <Link to={`/book/${data.createBook.book?.id}`}>View here</Link>
        </p>
      ) : null}

      <DropDown
        label="Series"
        defaultSelected={''}
        items={itemData}
        bind={bindSeries}
      />

      <FormField
        type="text"
        label="Issue"
        value={issueValue}
        bind={bindIssue}
      />

      <FormField
        type="text"
        label="Alternate Title"
        value={titleValue}
        bind={bindTitle}
      />

      <FormField
        type="text"
        label="Format"
        value={formatValue}
        bind={bindFormat}
      />

      <button>Save</button>
    </Form>
  );
}

export default BookForm;

const Form = styled.form`
  text-align: left;
  margin: 0 2em 2em 2em;
`;
