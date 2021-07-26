import * as React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import BookTable from "../components/book-table";
import Panel from "../components/layout/panel";
import {
  Book,
  SortDirectionEnum,
  useBooksQuery,
  useRankedBookListQuery,
  useRankedPublisherListQuery,
  useRankedSeriesListQuery,
} from "../hooks/graphql";

const TOP_SUMMARY_COUNT = 5;

export default function HomePage(): JSX.Element {
  const topPublishers: Array<string> = [];
  const topPublisherResult = useRankedPublisherListQuery({
    variables: {
      limit: TOP_SUMMARY_COUNT,
      field: "series_count",
      direction: SortDirectionEnum.Desc,
    },
  });
  topPublisherResult.data?.publishers.nodes?.map((publisher) => {
    if (publisher)
      topPublishers.push(`${publisher?.name} (${publisher?.seriesCount})`);
  });

  const topSeries: Array<string> = [];
  const topSeriesResult = useRankedSeriesListQuery({
    variables: {
      limit: TOP_SUMMARY_COUNT,
      field: "book_count",
      direction: SortDirectionEnum.Desc,
    },
  });
  topSeriesResult.data?.seriesList.nodes?.map((series) => {
    if (series) topSeries.push(`${series?.name} (${series?.bookCount})`);
  });

  const latestBooks: Array<string> = [];
  const latestBooksResult = useRankedBookListQuery({
    variables: {
      limit: TOP_SUMMARY_COUNT,
      field: "created_at",
      direction: SortDirectionEnum.Desc,
    },
  });
  latestBooksResult.data?.books.nodes?.map((book) => {
    if (book) latestBooks.push(book?.displayName);
  });

  const bookQueryResult = useBooksQuery();
  let bookTable = <></>;
  if (bookQueryResult.loading) {
    bookTable = <>Loading...</>;
  } else if (bookQueryResult.error) {
    bookTable = <>An error has occured</>;
  } else {
    const books = new Array<Book>();
    bookQueryResult.data?.books.nodes?.map((bookResult) => {
      books.push(Object.assign({} as Book, bookResult));
    });
    bookTable = <BookTable books={books} />;
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        <Panel headerText="Top Publishers" items={topPublishers} />
        <Panel headerText="Top Series" items={topSeries} />
        <Panel headerText="Latest Books" items={latestBooks} />
      </SimpleGrid>
      {bookTable}
    </>
  );
}
