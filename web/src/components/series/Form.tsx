import * as React from 'react';
import { useInput } from '../../hooks/useInput';
import { DropDown, Form, FormField, ListItem } from '../form';
import {
  useCreateSeriesMutation,
  usePublisherListQuery
} from '../../graphql/generated';
import { Link } from 'react-router-dom';

const SeriesForm = (): JSX.Element => {
  const { value: nameValue, bind: bindName } = useInput();
  const { value: publisherValue, bind: bindPublisher } = useInput();

  const { data: dataPublisher } = usePublisherListQuery();
  const itemData =
    dataPublisher?.publishers.nodes?.map((item) => {
      return { label: item?.name, value: item?.id } as ListItem;
    }) || [];

  const [createSeriesMutation, { data }] = useCreateSeriesMutation({
    variables: {
      name: nameValue,
      publisherId: publisherValue
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
          Saved!
          <Link to={`/series/${data.createSeries.series?.id}`}>View here</Link>
        </p>
      ) : null}

      <DropDown label="Publisher" items={itemData} bind={bindPublisher} />

      <FormField type="text" label="Name" value={nameValue} bind={bindName} />

      <button>Save</button>
    </Form>
  );
};

export default SeriesForm;
