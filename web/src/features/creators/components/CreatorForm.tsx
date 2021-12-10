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
  CreateCreatorMutationVariables,
  useCreateCreatorMutation,
} from "../api/create-creator.mutation.generated";

interface PublisherFormProps {
  htmlId?: string;
  showSubmitButton?: boolean;
}

const CreatorForm = function ({
  htmlId,
  showSubmitButton,
}: PublisherFormProps): React.ReactElement {
  const [alert, setAlert] = useState<string>();
  const toast = useToast();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm<CreateCreatorMutationVariables>();
  const [createPublisher] = useCreateCreatorMutation({
    // refetchQueries: [namedOperations.Query.C],
  });
  const onSubmit = handleSubmit(async (variables) => {
    try {
      const { data } = await createPublisher({ variables });
      if (data?.createCreator) {
        setValue("firstName", "");
        setValue("lastName", "");
        toast({
          title: "Publisher created.",
          description: `${data.createCreator.firstName} has been created successfully!`,
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

  const firstNameField: UseFormRegisterReturn = register("firstName", {
    required: "This is required",
  });

  const lastNameField: UseFormRegisterReturn = register("lastName", {
    required: "This is required",
  });

  return (
    <form id={htmlId} onSubmit={onSubmit}>
      <Stack>
        <Heading>Add Creator</Heading>
        {alert && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error">{alert}</Alert>
          </Box>
        )}

        <FormControl isInvalid={errors.firstName !== undefined}>
          <FormLabel htmlFor="name">First Name</FormLabel>
          <Input
            id="name"
            onBlur={firstNameField.onBlur}
            onChange={firstNameField.onChange}
            name={firstNameField.name}
            ref={firstNameField.ref}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastName !== undefined}>
          <FormLabel htmlFor="name">First Name</FormLabel>
          <Input
            id="name"
            onBlur={lastNameField.onBlur}
            onChange={lastNameField.onChange}
            name={lastNameField.name}
            ref={lastNameField.ref}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Save
        </Button>
      </Stack>
    </form>
  );
};

CreatorForm.defaultProps = {
  htmlId: "creator-form",
  showSubmitButton: false,
};

export default CreatorForm;
