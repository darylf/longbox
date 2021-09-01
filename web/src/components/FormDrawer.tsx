import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FiPlus } from "react-icons/fi";

interface FormDrawerProps {
  id: string;
  children: ReactElement;
  openButtonText?: string;
  title?: string;
}

function FormDrawer({
  id,
  children,
  openButtonText,
  title,
}: FormDrawerProps): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<FiPlus />} colorScheme="teal" onClick={onOpen}>
        {openButtonText}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">{children} </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit" form={id}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

FormDrawer.defaultProps = {
  openButtonText: "Show Form",
  title: "",
};

export default FormDrawer;
