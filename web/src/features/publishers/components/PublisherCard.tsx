import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { Publisher } from "../../../types";

interface PublisherCardProps {
  publisher: Publisher;
}

function PublisherCard({ publisher }: PublisherCardProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Link to={`/publishers/${publisher.id}`}>
          <Image
            src={publisher.logo?.url}
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

export default PublisherCard;
