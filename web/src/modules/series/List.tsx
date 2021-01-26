import * as React from 'react';
import { Link } from 'react-router-dom';
import { Series, useSeriesListQuery } from '../../graphql/generated';

function SeriesList(): JSX.Element {
  const { loading, error, data } = useSeriesListQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const SeriesItems = data?.seriesList.nodes?.map((item) => {
    const { id, name } = Object.assign({} as Series, item);
    return (
      <li key={id}>
        <Link to={`/series/${id}`}>{name}</Link>
      </li>
    );
  });

  return <ol>{SeriesItems}</ol>;
}

export default SeriesList;
