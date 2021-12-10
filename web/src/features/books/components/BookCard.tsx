import {
  Box,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { Book } from "../../../types";
import { nvl } from "../../../utils/nvl";

interface BookCardProps {
  book: Book;
}

const BookCard = function ({ book }: BookCardProps) {
  const { id, credits, displayName, publisher, coverImage, publicationDate } =
    book;
  const coverImg: string =
    `${coverImage?.url}` ??
    `https://via.placeholder.com/633x1024,png?text=Cover+Missing`;

  return (
    <HStack
      p={4}
      bg={useColorModeValue("white", "gray.800")}
      rounded="xl"
      borderWidth="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      w="100%"
      maxW="400px"
      textAlign="left"
      align="start"
      spacing={4}
      height={36}
      position="relative"
    >
      <Box
        rounded="md"
        h="144px"
        w="90px"
        overflow="hidden"
        shadow="lg"
        position="absolute"
        bottom={4}
      >
        <Image
          src={coverImg}
          alt={`cover of ${displayName}`}
          height={96}
          width={60}
        />
      </Box>
      <VStack
        align="start"
        justify="flex-start"
        spacing={1}
        maxW="lg"
        pl={24}
        h="100%"
      >
        <VStack spacing={0} align="start">
          <Text>
            <Link
              color={useColorModeValue("black", "white")}
              to={`/comics/${id}`}
              fontWeight="bold"
              fontSize="md"
              noOfLines={2}
            >
              {displayName}
            </Link>
          </Text>
          <Text>
            <Link
              fontSize="md"
              color={useColorModeValue("gray.500", "gray.200")}
              to={`/publishers/${publisher?.id}`}
            >
              {publisher?.name}
            </Link>
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.500", "gray.200")}>
            {credits &&
              credits
                ?.filter((c) => c.featured)
                .sort((a, b) => (nvl(a.position) > nvl(b.position) ? 1 : -1))
                .map<React.ReactNode>((c) => (
                  <Link key={c.id} to={`/creators/${c.creator.id}`}>
                    {c.creator.displayName}
                  </Link>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
          </Text>
        </VStack>
        <VStack spacing={0} align="start">
          {/* <StarRating rating={rating} /> */}
          <Text fontSize="xs" color="gray.400">
            {publicationDate}
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default BookCard;
