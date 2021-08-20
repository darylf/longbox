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
import { Series, UserError } from "../hooks/use-graphql";

interface FormProps {
  series?: Partial<Series>;
  handleSubmit: (series: Partial<Series>) => void;
  isLoading: boolean;
  userErrors?: Array<UserError> | undefined;
}

function displayError(userError: UserError) {
  return <div key={userError.message}>{userError.message}</div>;
}

export default function PublisherForm({
  series,
  handleSubmit,
  userErrors,
  isLoading,
}: FormProps): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(series?.name ?? "");
  return (
    <>
      <form>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Series</ModalHeader>
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
                  handleSubmit({ name } as Partial<Series>);
                }}
                disabled={isLoading}
                colorScheme="blue"
                mr={3}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
      <Button onClick={onOpen}>Edit Series</Button>
    </>
  );
}

PublisherForm.defaultProps = {
  series: {},
  userErrors: undefined,
};
