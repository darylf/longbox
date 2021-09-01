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
import { Publisher } from "../../../types";
import SeriesFormEmbedded from "./SeriesFormEmbedded";

function FormDrawer({ publisher }: { publisher: Publisher }): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<FiPlus />} colorScheme="teal" onClick={onOpen}>
        Add Series
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add Series</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <SeriesFormEmbedded
                id="series-form"
                selectedPublisher={publisher}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit" form="series-form">
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FormDrawer;
