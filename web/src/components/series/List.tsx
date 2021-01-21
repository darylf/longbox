import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

interface SeriesQueryResult {
  id: number;
  name: string;
}
const GET_SERIES_LIST = gql`
  query GetSeries {
    seriesList {
      nodes {
        id
        name
      }
    }
  }
`;

function SeriesList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_SERIES_LIST);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const SeriesItems = data.seriesList.nodes.map(
    ({ id, name }: SeriesQueryResult) => <li key={id}>{name}</li>
  );

  return <ol>{SeriesItems}</ol>;
}

export default SeriesList;
