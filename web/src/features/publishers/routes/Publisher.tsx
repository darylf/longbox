import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import FormDrawer from "../../../components/FormDrawer";
import { useLoginState } from "../../../hooks/useAuthentication";
import { Publisher as IPublisher } from "../../../types";
import SeriesForm from "../../series/components/SeriesForm";
import { usePublisherQuery } from "../api/publisher.query.generated";
import { ViewPublisher } from "../components/ViewPublisher";

export const Publisher = (): React.ReactElement => {
  const { id } = useParams();
  const { authenticated } = useLoginState();
  const { data, loading, error } = usePublisherQuery({
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  const publisher = data?.publisher as IPublisher;

  return (
    <>
      {publisher && (
        <>
          <Stack>
            <ViewPublisher publisher={publisher} />
            {authenticated && (
              <HStack>
                <FormDrawer id={id} openButtonText="Add a Series">
                  <SeriesForm id={id} selectedPublisher={publisher} />
                </FormDrawer>
              </HStack>
            )}
          </Stack>
        </>
      )}
    </>
  );
};
