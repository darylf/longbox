import { isApolloError } from "@apollo/client";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import {
  CreatePublisherMutationVariables,
  namedOperations,
} from "../../../types";
import { useCreatePublisherMutation } from "../api/create-publisher.mutation.generated";

interface PublisherFormProps {
  htmlId?: string;
  showSubmitButton?: boolean;
}

const PublisherForm = ({
  htmlId,
  showSubmitButton,
}: PublisherFormProps): React.ReactElement => {
  const [alert, setAlert] = useState<string>();
  const toast = useToast();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm<CreatePublisherMutationVariables>();
  const [createPublisher] = useCreatePublisherMutation({
    refetchQueries: [namedOperations.Query.Publishers],
  });
  const onSubmit = handleSubmit(async (variables) => {
    try {
      const { data } = await createPublisher({ variables });
      if (data?.createPublisher) {
        setValue("name", "");
        toast({
          title: "Publisher created.",
          description: `${data.createPublisher.name} has been created successfully!`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error: any) {
      if (isApolloError(error)) {
        setAlert(error.graphQLErrors[0].message);
      }
    }
  });

  const nameField: UseFormRegisterReturn = register("name", {
    required: "This is required",
  });

  return (
    <>
      <form id={htmlId} onSubmit={onSubmit}>
        <Stack>
          <Heading>Add Publisher</Heading>
          {alert && (
            <Box sx={{ mb: 2 }}>
              <Alert severity="error">{alert}</Alert>
            </Box>
          )}
          <FormControl isInvalid={errors.name !== undefined}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              onBlur={nameField.onBlur}
              onChange={nameField.onChange}
              name={nameField.name}
              ref={nameField.ref}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          {showSubmitButton && (
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          )}
        </Stack>
      </form>
    </>
  );
};

PublisherForm.defaultProps = {
  htmlId: "publisher-form",
  showSubmitButton: false,
};

export default PublisherForm;
