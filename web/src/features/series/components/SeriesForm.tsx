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
import React, { ReactElement, useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { Publisher } from "../../../types";
import { PublisherDocument } from "../../publishers/api/publisher.query.generated";
import {
  CreateSeriesMutationVariables,
  useCreateSeriesMutation,
} from "../api/create-series.mutation.generated";

interface SeriesFormProps {
  id?: string;
  selectedPublisher: Publisher;
  showSubmitButton: boolean;
}

function SeriesForm({
  id,
  selectedPublisher,
  showSubmitButton,
}: SeriesFormProps): ReactElement {
  const [alert, setAlert] = useState<string>();
  const toast = useToast();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm<CreateSeriesMutationVariables>();
  const [createSeries] = useCreateSeriesMutation({
    refetchQueries: [
      { query: PublisherDocument, variables: { id: selectedPublisher.id } },
    ],
  });

  const onSubmit = handleSubmit(async (variables) => {
    try {
      const { data } = await createSeries({ variables });
      if (data?.createSeries) {
        setValue("publisherId", selectedPublisher.id);
        setValue("name", "");
        toast({
          title: "Series created.",
          description: `${data.createSeries.name} has been created successfully!`,
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

  setValue("publisherId", selectedPublisher.id);

  const nameField: UseFormRegisterReturn = register("name", {
    required: "This is required",
  });

  return (
    <>
      <form id={id} onSubmit={onSubmit}>
        <Stack>
          <Heading>Add Series</Heading>
          {alert && (
            <Box sx={{ mb: 2 }}>
              <Alert severity="error">{alert}</Alert>
            </Box>
          )}

          <FormControl isDisabled>
            <FormLabel htmlFor="publisherId">Publisher</FormLabel>
            <Input id="publisherId" value={selectedPublisher.name} />
          </FormControl>

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
}

SeriesForm.defaultProps = {
  id: "series-form",
  showSubmitButton: false,
};

export default SeriesForm;
