import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Link from "../../../components/Link";
import { Publisher, Series, SortDirectionEnum } from "../../../types";
import { usePublishersQuery } from "../../publishers/api/publishers.query.generated";
import { useSeriesListQuery } from "../../series/api/series-list.query.generated";

interface PublisherCardProps {
  publisher: Publisher;
}
function PublisherCard({ publisher }: PublisherCardProps) {
  const placeholderPublisherName = publisher.name
    .replace(" ", "+")
    .toLocaleLowerCase();
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Link to={`/publishers/${publisher.id}`}>
          <Image
            src={`https://via.placeholder.com/728x90.png?text=${placeholderPublisherName}`}
            alt={`logo of ${publisher.name}`}
            roundedTop="lg"
          />
        </Link>

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <Link to={`/publishers/${publisher.id}`}>{publisher.name}</Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

interface FeaturedItemProps<T> {
  title: string;
  moreLinkText: string;
  moreLinkUrl: string;
  children: (item: T) => React.ReactNode;
  items: T[];
}
function FeaturedItem<T>({
  children,
  items,
  moreLinkText,
  moreLinkUrl,
  title,
}: FeaturedItemProps<T>) {
  return (
    <Box>
      <Heading size="lg">{title}</Heading>
      <Flex>{items.map((item) => children(item))}</Flex>
      <Link to={moreLinkUrl}>{moreLinkText}</Link>
    </Box>
  );
}

function FeaturedPublishers() {
  const { data, loading, error } = usePublishersQuery({
    variables: {
      direction: SortDirectionEnum.Desc,
      field: "series_countusePublishersQuery",
      limit: 5,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const publisherList: Publisher[] =
    data?.publishers.nodes?.map((p) => p as Publisher) ?? [];

  return (
    <FeaturedItem
      title="Featured Publishers"
      items={publisherList}
      moreLinkText="Browse all publishers"
      moreLinkUrl="/publishers"
    >
      {(publisher) => <PublisherCard publisher={publisher} />}
    </FeaturedItem>
  );
}

function FeaturedSeries() {
  const { data, loading, error } = useSeriesListQuery({
    variables: {
      direction: SortDirectionEnum.Desc,
      field: "book_count",
      limit: 5,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const seriesList: Series[] =
    data?.seriesList.nodes?.map((p) => p as Series) ?? [];

  return (
    <FeaturedItem
      title="Featured Series"
      items={seriesList}
      moreLinkText="Browse all series"
      moreLinkUrl="/series"
    >
      {(series) => (
        <Box p={5}>
          <Link to={`/series/${series.id}`}>{series.name}</Link>
        </Box>
      )}
    </FeaturedItem>
  );
}

function BrowseCollection(): ReactElement {
  return (
    <Stack>
      <Heading>Explore</Heading>
      <FeaturedPublishers />
      <FeaturedSeries />
    </Stack>
  );
}

export default BrowseCollection;
