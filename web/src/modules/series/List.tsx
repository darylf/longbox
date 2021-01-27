import * as React from 'react';
import ItemList from '../../components/shared/ItemList';
import { Book, Series, useSeriesListQuery } from '../../hooks/graphql';

function addName<T>(
  items: Array<T> = [],
  fn?: (arg0: T) => string
): Array<T & { name: string }> {
  const xx = fn ? fn : (arg0: T) => '';
  const result = items.map((item) => ({ ...item, name: xx(item) }));
  return result;
}

function SeriesList(): JSX.Element {
  const { loading, error, data } = useSeriesListQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const seriesList = data?.seriesList.nodes ?? [];

  const SeriesItems = seriesList.map((item) => {
    const { id, name, books } = Object.assign({} as Series, item);
    const modBooks = addName(
      books as Array<Book>,
      ({ seriesName, issue }: Book) => `${seriesName} #${issue}`
    );
    return <ItemList title={name} linkTo="/books/:id" list={modBooks} />;
  });

  return (
    <>
      <h1>Browse Books</h1>
      {SeriesItems}
    </>
  );
}

export default SeriesList;
