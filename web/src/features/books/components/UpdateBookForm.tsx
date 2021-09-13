import {
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Book } from "../../../types";
import { useBookQuery } from "../api/book.query.generated";
import BookCreditsForm from "./BookCreditsForm";
import BookOverviewForm from "./BookOverviewForm";

interface FormProps {
  title: string;
}

interface FormWithBookIdProps extends FormProps {
  bookId?: string;
}

const FormWithBookId = ({
  bookId,
  title,
}: FormWithBookIdProps): ReactElement => {
  if (bookId === undefined) return <>Missing book id</>;

  const { data, loading, error } = useBookQuery({
    variables: { id: bookId },
  });

  const book = data?.book as Book;

  if (loading) return <>Loading...</>;
  if (error) return <>An error has ocurred...</>;

  return (
    <Stack>
      <Heading>{title}</Heading>

      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Creators</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BookOverviewForm book={book} htmlId="update-book" />
          </TabPanel>
          <TabPanel>
            <BookCreditsForm bookId={book?.id} credits={book?.credits ?? []} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

FormWithBookId.defaultProps = {
  bookId: undefined,
};

export default FormWithBookId;
