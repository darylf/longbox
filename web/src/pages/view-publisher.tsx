import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PublisherForm from "../components/publisher-form";
import ShowPublisher from "../components/show-publisher";
import { useLoginState } from "../hooks/use-authentication";
import {
  Publisher,
  usePublisherQuery,
  useUpdatePublisherMutation,
} from "../hooks/use-graphql";

function ViewPublisher(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { authenticated } = useLoginState();
  const { loading, error } = usePublisherQuery({
    variables: { id },
    onCompleted: (data) => setPublisher(data.publisher as Publisher),
  });
  const [updatePublisher, { data: dataMutation }] = useUpdatePublisherMutation({
    variables: { id, name: publisher?.name ?? "" },
    onCompleted: (data) => {
      if (data.updatePublisher?.publisher) {
        setPublisher({
          ...publisher,
          ...data.updatePublisher?.publisher,
        } as Publisher);
        setIsModalOpen(false);
      }
    },
    onError: (err) => console.error(err),
  });

  const handleSubmit = (publisherParam: Partial<Publisher>) => {
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
              <ShowPublisher publisher={publisher} />
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
}

export default ViewPublisher;
