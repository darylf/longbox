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
  showOpenButton?: boolean;
  title?: string;
  isOpen?: boolean;
  onOpen?(): void;
  onClose?(): void;
}

function FormDrawer({
  id,
  children,
  openButtonText,
  showOpenButton,
  title,
  isOpen: isOpenProp,
  onOpen: onOpenProp,
  onClose: onCloseProp,
}: FormDrawerProps): ReactElement {
  const disclosure = useDisclosure();

  const isOpen = isOpenProp !== undefined ? isOpenProp : disclosure.isOpen;
  const onClose = onCloseProp ?? disclosure.onClose;
  const onOpen = onOpenProp ?? disclosure.onOpen;

  return (
    <>
      {showOpenButton && (
        <Button leftIcon={<FiPlus />} colorScheme="teal" onClick={onOpen}>
          {openButtonText}
        </Button>
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">{children} </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
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
  showOpenButton: true,
  title: "",
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
};

export default FormDrawer;
