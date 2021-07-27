import { SimpleGrid } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import BookTable from "../components/book-table";
import Panel from "../components/layout/panel";
import {
  Book,
  Publisher,
  Series,
  SortDirectionEnum,
  useBooksQuery,
  useRankedBookListQuery,
  useRankedPublisherListQuery,
  useRankedSeriesListQuery,
} from "../hooks/graphql";

const TOP_SUMMARY_COUNT = 5;

function convertToArray<ReturnType>(
  items: Array<unknown> | null | undefined
): Array<ReturnType> {
  const result = new Array<ReturnType>();
  items?.map((item) => {
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

  const { data, loading, error } = useBooksQuery();
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
              {item.name} ({item.seriesCount})
            </>
          )}
        />
        <Panel
          headerText="Top Series"
          items={topSeries}
          render={(item) => <>{item.name}</>}
        />
        <Panel
          headerText="Latest Books"
          items={latestBooks}
          render={(item) => <>{item.displayName}</>}
        />
      </SimpleGrid>
      {bookTable}
    </>
  );
}
