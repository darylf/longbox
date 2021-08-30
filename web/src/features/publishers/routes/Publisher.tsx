import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLoginState } from "../../../hooks/use-authentication";
import {
  Publisher as PublisherObj,
  usePublisherQuery,
  useUpdatePublisherMutation,
} from "../../../hooks/use-graphql";
import { PublisherForm } from "../components/PublisherForm";
import { ViewPublisher } from "../components/ViewPublisher";

export const Publisher = (): React.ReactElement => {
  const { id } = useParams();
  const [publisher, setPublisher] = useState<PublisherObj | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { authenticated } = useLoginState();
  const { loading, error } = usePublisherQuery({
    variables: { id },
    onCompleted: (data) => setPublisher(data.publisher as PublisherObj),
  });
  const [updatePublisher, { data: dataMutation }] = useUpdatePublisherMutation({
    variables: { id, name: publisher?.name ?? "" },
    onCompleted: (data) => {
      if (data.updatePublisher?.publisher) {
        setPublisher({
          ...publisher,
          ...data.updatePublisher?.publisher,
        } as PublisherObj);
        setIsModalOpen(false);
      }
    },
    onError: (err) => console.error(err),
  });

  const handleSubmit = (publisherParam: Partial<PublisherObj>) => {
    updatePublisher({ variables: { id, name: publisherParam.name ?? "" } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  return (
    <>
      {publisher && (
        <>
          <Stack>
            <Box mt={2}>
              <ViewPublisher publisher={publisher} />
            </Box>
            {authenticated && (
              <Box mt={2} textAlign="right">
                <PublisherForm
                  buttonText="Edit Publisher"
                  handleSubmit={handleSubmit}
                  isLoading={loading}
                  isModalOpen={isModalOpen}
                  publisher={publisher}
                  setIsModalOpen={setIsModalOpen}
                  userErrors={dataMutation?.updatePublisher?.errors}
                />
              </Box>
            )}
          </Stack>
        </>
      )}
    </>
  );
};