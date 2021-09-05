import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { Book } from "../../../types";

interface Props {
  book: Book;
}
function ShowBook({ book }: Props): React.ReactElement {
  console.log(book);
  const coverImg: string =
    `${book.coverImage?.url}` ??
    `https://via.placeholder.com/633x1024,png?text=Cover+Missing`;
  return (
    <>
      <Flex p={6}>
        <Box boxSize="sm">
          <Image src={coverImg} alt={`cover of ${book.displayName}`} />
        </Box>

        <Box p={10}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading size="2xl" fontWeight={500}>
              {book.displayName}
            </Heading>
            <Text color="gray.500">{book.format}</Text>
          </Stack>

          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>Creators</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box>
                  <Stack>
                    <Text>
                      Publisher:
                      <Link to={`/publishers/${book.publisher?.id}`}>
                        {book.publisher?.name}
                      </Link>
                    </Text>
                    <Text>
                      Series:
                      <Link to={`/series/${book.series?.id}`}>
                        {book.series?.name}
                      </Link>
                    </Text>
                    <Text>
                      Creators:{" "}
                      <UnorderedList>
                        {book.featuredCreators.map((c) => (
                          <ListItem key={c.id}>
                            <Link to={`/creators/${c.id}`}>
                              {`${c.firstName} ${c.lastName}`}
                            </Link>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Text>
                    <Text>Age Rating: {book.ageRating}</Text>
                    <Text>Title: {book.alternateTitle}</Text>
                    <Text>Pages: {book.pageCount}</Text>
                    <Text>Cover price: {book.price}</Text>
                    <Text>Publication date: {book.publicationDate}</Text>
                    <Text>Summary: {book.summary}</Text>
                    <Text>
                      Originally created:{book.createdAt} by{" "}
                      {book.createdBy.username}
                    </Text>
                    <Text>
                      Last updated at: {book.updatedAt} by{" "}
                      {book.updatedBy.username}
                    </Text>
                  </Stack>
                </Box>
              </TabPanel>
              <TabPanel>
                {book.credits && (
                  <>
                    <Text fontWeight={800}>Creators</Text>
                    <List spacing={3}>
                      {book.credits?.map((c) => (
                        <ListItem key={c.id}>
                          <Link to={`/creators/${c.creator.id}`}>
                            {c.creator.firstName} {c.creator.lastName}
                          </Link>{" "}
                          ({c.role})
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}

export default ShowBook;
