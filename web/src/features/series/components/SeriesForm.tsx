import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Publisher, Series, UserError } from "../../../types";

interface SeriesFormProps {
  buttonText: string;
  handleSubmit: (series: Partial<Series>) => void;
  isLoading: boolean;
  isModalOpen: boolean;
  publishers: Array<Publisher>;
  series?: Partial<Series>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userErrors?: Array<UserError> | undefined;
}

function ErrorMessage({ message }: UserError) {
  return <div key={message}>{message}</div>;
}

function SeriesForm({
  buttonText,
  handleSubmit,
  isLoading,
  isModalOpen,
  publishers,
  setIsModalOpen,
  series,
  userErrors,
}: SeriesFormProps): React.ReactElement {
  const { onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(series?.name ?? "");
  const [publisherId, setPublisherId] = useState(series?.publisher?.id ?? "");
  return (
    <>
      <form>
        <Modal isOpen={isModalOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{buttonText}</ModalHeader>
            <ModalBody pb={6}>
              <Stack>
                {userErrors && (
                  <div>{userErrors.map((e) => ErrorMessage(e))}</div>
                )}
                <FormControl isRequired>
                  <FormLabel htmlFor="publisher">Publisher:</FormLabel>
                  <Select
                    id="publisher"
                    placeholder="Select option"
                    onChange={(e) => setPublisherId(e.target.value)}
                  >
                    {publishers.map((p) => (
                      <option value={p.id}>{p.name}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  handleSubmit({ name, publisherId } as Partial<Series>);
                }}
                disabled={isLoading}
                colorScheme="blue"
                mr={3}
              >
                Save
              </Button>
              <Button
                onClick={() => {
                  setIsModalOpen(false);
                  onClose();
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
      <Button
        onClick={() => {
          setIsModalOpen(true);
          onOpen();
        }}
      >
        {buttonText}
      </Button>
    </>
  );
}

SeriesForm.defaultProps = {
  series: {},
  userErrors: undefined,
};

export default SeriesForm;
