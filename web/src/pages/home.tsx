import { Link, SimpleGrid } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as LinkRouter } from "react-router-dom";
import BookTable from "../components/book-table";
import Panel from "../components/panel";
import {
  Book,
  Publisher,
  Series,
  SortDirectionEnum,
  useBooksQuery,
  useRankedBookListQuery,
  useRankedPublisherListQuery,
  useRankedSeriesListQuery,
} from "../hooks/use-graphql";

const TOP_SUMMARY_COUNT = 5;

function convertToArray<ReturnType>(
  items: Array<unknown> | null | undefined
): Array<ReturnType> {
  const result = new Array<ReturnType>();
  items?.forEach((item) => {
    result.push(Object.assign({} as ReturnType, item));
  });
  return result;
}

export default function HomePage(): ReactElement {
  const topPublisherResult = useRankedPublisherListQuery({
    variables: {
      limit: TOP_SUMMARY_COUNT,
      field: "series_count",
      direction: SortDirectionEnum.Desc,
    },
  });

  const topPublishers = convertToArray<Publisher>(
    topPublisherResult.data?.publishers.nodes
  );

  const topSeriesResult = useRankedSeriesListQuery({
    variables: {
      limit: TOP_SUMMARY_COUNT,
      field: "book_count",
      direction: SortDirectionEnum.Desc,
    },
  });

  const topSeries = convertToArray<Series>(
    topSeriesResult.data?.seriesList.nodes
  );

  const latestBooksResult = useRankedBookListQuery({
    variables: {
      limit: TOP_SUMMARY_COUNT,
      field: "created_at",
      direction: SortDirectionEnum.Desc,
    },
  });

  const latestBooks = convertToArray<Book>(latestBooksResult.data?.books.nodes);

  const { data, loading, error } = useBooksQuery({ variables: { limit: 50 } });
  let bookTable = <></>;
  if (loading) {
    bookTable = <>Loading...</>;
  } else if (error) {
    bookTable = <>An error has occured</>;
  } else {
    const books = convertToArray<Book>(data?.books.nodes);
    bookTable = <BookTable books={books} />;
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        <Panel
          headerText="Top Publishers"
          items={topPublishers}
          render={(item) => (
            <>
              <Link as={LinkRouter} to={`/publishers/${item.id}`}>
                {item.name}
              </Link>{" "}
              ({item.seriesCount})
            </>
          )}
        />
        <Panel
          headerText="Top Series"
          items={topSeries}
          render={(item) => (
            <>
              <Link as={LinkRouter} to={`/series/${item.id}`}>
                {item.name}
              </Link>{" "}
              ({item.bookCount})
            </>
          )}
        />
        <Panel
          headerText="Latest Books"
          items={latestBooks}
          render={(item) => (
            <Link as={LinkRouter} to={`/comics/${item.id}`}>
              {item.displayName}
            </Link>
          )}
        />
      </SimpleGrid>
      {bookTable}
    </>
  );
}
