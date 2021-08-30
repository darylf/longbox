import React, { useState } from "react";
import {
  Publisher,
  useCreatePublisherMutation,
} from "../../../hooks/use-graphql";
import { PublisherForm } from "../components/PublisherForm";

export const NewPublisher = (): React.ReactElement => {
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createPublisher, { loading }] = useCreatePublisherMutation({
    variables: {
      name: `${publisher?.name}`,
    },
    onCompleted: () => {
      setIsModalOpen(false);
    },
    onError: (error) => console.error("An error has occured", error),
  });

  const handleSubmit = (publisherParam: Partial<Publisher>) => {
    createPublisher({ variables: { name: publisherParam.name ?? "" } });
  };

  return (
    <PublisherForm
      buttonText="Create a Publisher"
      handleSubmit={handleSubmit}
      isLoading={loading}
      isModalOpen={isModalOpen}
      publisher={publisher as Publisher}
      setIsModalOpen={setIsModalOpen}
      userErrors={[]}
    />
  );
};
