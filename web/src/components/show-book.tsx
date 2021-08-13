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
} from "@chakra-ui/react";
import React from "react";
import Link from "../components/link";
import { Book } from "../hooks/use-graphql";

interface Props {
  book: Book;
}
function ShowBook({ book }: Props): React.ReactElement {
  const coverImg = `https://via.placeholder.com/633x1024,png?text=${book.displayName}`;
  return (
    <>
      <Flex p={6}>
        <Box boxSize="sm">
          <Image src={coverImg} />
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
                  <Text>Age Rating: {book.ageRating}</Text>
                  <Text>Title: {book.alternateTitle}</Text>
                  <Text>Pages: {book.pageCount}</Text>
                  <Text>Cover price: {book.price}</Text>
                  <Text>Publication date: {book.publicationDate}</Text>
                  <Text>Summary: {book.summary}</Text>
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
      <Text>Originally created:{book.createdAt}</Text>
      <Text>Last updated at {book.updatedAt}</Text>
    </>
  );
}

export default ShowBook;
