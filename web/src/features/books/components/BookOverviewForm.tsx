import { isApolloError } from "@apollo/client";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import {
  Book,
  namedOperations,
  UpdateBookMutationVariables,
} from "../../../types";
import { useUpdateBookMutation } from "../api/update-book.mutation.generated";

interface BookOverviewFormProps {
  book: Book;
  htmlId: string;
}

const BookOverviewForm = function ({
  book,
  htmlId,
}: BookOverviewFormProps): ReactElement {
  const [alert, setAlert] = useState<string>();
  const toast = useToast();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<UpdateBookMutationVariables>({
    defaultValues: {
      id: book?.id,
      ageRating: book?.ageRating,
      alternateTitle: book?.alternateTitle,
      format: `${book?.format}`,
      issue: `${book?.issue}`,
      pageCount: book?.pageCount,
      price: book?.price,
      publicationDate: book?.publicationDate,
      seriesId: `${book?.series?.id}`,
      summary: book?.summary,
      credits: [],
    },
  });
  const [updateBook] = useUpdateBookMutation({
    refetchQueries: [namedOperations.Query.SeriesList],
  });
  const onSubmit = handleSubmit(async (variables) => {
    try {
      const { data } = await updateBook({ variables });
      if (data?.updateBook) {
        reset();
        toast({
          title: "Book Updated.",
          description: `${data.updateBook?.displayName} has been updated successfully!`,
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

  const ageRatingField: UseFormRegisterReturn = register("ageRating");
  const alternateTitleField: UseFormRegisterReturn = register("alternateTitle");
  const formatField: UseFormRegisterReturn = register("format");
  const issueField: UseFormRegisterReturn = register("issue");
  const pageCountField: UseFormRegisterReturn = register("pageCount");
  const priceField: UseFormRegisterReturn = register("price");
  const publicationDateField: UseFormRegisterReturn =
    register("publicationDate");
  const summaryField: UseFormRegisterReturn = register("summary");

  return (
    <form id={htmlId} onSubmit={onSubmit}>
      <Stack>
        {alert && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error">{alert}</Alert>
          </Box>
        )}

        <FormControl isInvalid={errors.format !== undefined}>
          <FormLabel htmlFor="format">Format</FormLabel>
          <Select
            id="format"
            onBlur={formatField.onBlur}
            onChange={formatField.onChange}
            name={formatField.name}
            ref={formatField.ref}
          >
            <option value="Comic">Comic</option>
            <option value="Trade Paperback">Trade Paperback</option>
            <option value="Hard Cover">Hard Cover</option>
          </Select>
          <FormErrorMessage>{errors?.format?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.issue !== undefined}>
          <FormLabel htmlFor="issue">Issue</FormLabel>
          <Input
            id="issue"
            onBlur={issueField.onBlur}
            onChange={issueField.onChange}
            name={issueField.name}
            ref={issueField.ref}
          />
          <FormErrorMessage>{errors?.issue?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.alternateTitle !== undefined}>
          <FormLabel htmlFor="alternateTitle">Alternate Title</FormLabel>
          <Input
            id="alternateTitle"
            onBlur={alternateTitleField.onBlur}
            onChange={alternateTitleField.onChange}
            name={alternateTitleField.name}
            ref={alternateTitleField.ref}
          />
          <FormErrorMessage>{errors?.alternateTitle?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.pageCount !== undefined}>
          <FormLabel htmlFor="pageCount">Page Count</FormLabel>
          <Input
            id="pageCount"
            onBlur={pageCountField.onBlur}
            onChange={pageCountField.onChange}
            name={pageCountField.name}
            ref={pageCountField.ref}
          />
          <FormErrorMessage>{errors?.pageCount?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.price !== undefined}>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            id="price"
            onBlur={priceField.onBlur}
            onChange={priceField.onChange}
            name={priceField.name}
            ref={priceField.ref}
          />
          <FormErrorMessage>{errors?.price?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.publicationDate !== undefined}>
          <FormLabel htmlFor="publicationDate">Publication Date</FormLabel>
          <Input
            id="publicationDate"
            onBlur={publicationDateField.onBlur}
            onChange={publicationDateField.onChange}
            name={publicationDateField.name}
            ref={publicationDateField.ref}
          />
          <FormErrorMessage>
            {errors?.publicationDate?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.ageRating !== undefined}>
          <FormLabel htmlFor="ageRating">Age Rating</FormLabel>
          <Input
            id="ageRating"
            onBlur={ageRatingField.onBlur}
            onChange={ageRatingField.onChange}
            name={ageRatingField.name}
            ref={ageRatingField.ref}
          />
          <FormErrorMessage>{errors?.ageRating?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.summary !== undefined}>
          <FormLabel htmlFor="summary">Summary</FormLabel>
          <Textarea
            id="summary"
            onBlur={summaryField.onBlur}
            onChange={summaryField.onChange}
            name={summaryField.name}
            ref={summaryField.ref}
          />
          <FormErrorMessage>{errors?.summary?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default BookOverviewForm;
