import { HStack, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormDrawer from "../../../components/FormDrawer";
import { Head } from "../../../components/Head";
import { useLoginState } from "../../../hooks/useAuthentication";
import { Publisher as IPublisher } from "../../../types";
import ProtectedContent from "../../auth/components/ProtectedContent";
import SeriesForm from "../../series/components/SeriesForm";
import { usePublisherQuery } from "../api/publisher.query.generated";
import { ViewPublisher } from "../components/ViewPublisher";

export const Publisher = function (): React.ReactElement {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const publisherId = id ?? "";
  const { authenticated } = useLoginState();
  const { data, loading, error } = usePublisherQuery({
    variables: { id: publisherId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  const publisher = data?.publisher as IPublisher;

  return (
    <>
      <Head title={publisher.name} />
      <Stack>
        <ViewPublisher publisher={publisher} />
        {authenticated && (
          <HStack>
            <ProtectedContent>
              <FormDrawer
                id={publisherId}
                isOpen={isOpen}
                onOpen={open}
                onClose={close}
                openButtonText="Add a Series"
              >
                <SeriesForm id={publisherId} selectedPublisher={publisher} />
              </FormDrawer>
            </ProtectedContent>
          </HStack>
        )}
      </Stack>
    </>
  );
};
