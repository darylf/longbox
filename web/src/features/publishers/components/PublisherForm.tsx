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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Publisher, UserError } from "../../../types";

interface PublisherFormProps {
  buttonText: string;
  handleSubmit: (publisher: Partial<Publisher>) => void;
  isLoading: boolean;
  isModalOpen: boolean;
  publisher?: Partial<Publisher>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userErrors?: Array<UserError> | undefined;
}

function displayError(userError: UserError) {
  return <div key={userError.message}>{userError.message}</div>;
}

export const PublisherForm = ({
  buttonText,
  handleSubmit,
  isLoading,
  isModalOpen,
  setIsModalOpen,
  publisher,
  userErrors,
}: PublisherFormProps): React.ReactElement => {
  const { onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(publisher?.name ?? "");
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
                  <div>{userErrors.map((e) => displayError(e))}</div>
                )}
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
                  handleSubmit({ name } as Partial<Publisher>);
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
        leftIcon={<FiEdit />}
        onClick={() => {
          setIsModalOpen(true);
          onOpen();
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};

PublisherForm.defaultProps = {
  publisher: {},
  userErrors: undefined,
};
