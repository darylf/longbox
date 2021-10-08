import { isApolloError } from "@apollo/client/errors";
import {
  Box,
  Button,
  Checkbox,
  Input,
  Table,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash2 } from "react-icons/fi";
import { Creator, Credit, CreditInput } from "../../../types";
import { useCreatorsSearchQuery } from "../../creators/api/creators-search.query.generated";
import { useUpdateCreditsMutation } from "../api/update-credits.mutation.generated";

interface BookCreditsFormProps {
  bookId: string;
  credits: Array<Credit>;
}

function BookCreditsForm({
  bookId: bookIdParam,
  credits,
}: BookCreditsFormProps): React.ReactElement {
  const [selectedCreator, setSelectedCreator] = useState<Creator>();
  const [selectedRole, setSelectedRole] = useState<string>();
  const [alert, setAlert] = useState<string | undefined>();
  const toast = useToast();
  const defaultCredits: Array<CreditInput> = credits.map((c) => {
    return {
      creatorId: c.creator.id,
      roleId: c.role,
      featured: c.featured,
      position: c.position,
    } as CreditInput;
  });

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<{ bookId: string; credits: Array<CreditInput> }>({
    defaultValues: { bookId: bookIdParam, credits: defaultCredits },
  });

  const entryForm = useForm<CreditInput>();
  const [updateCredits, { data, loading, error }] = useUpdateCreditsMutation();
  const { refetch } = useCreatorsSearchQuery();

  const { fields, append, prepend, remove, update, move, insert } =
    useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "credits", // unique name for your Field Array
    });

  const onSubmit = handleSubmit(async (fieldVariables) => {
    try {
      const { data } = await updateCredits({
        variables: { bookId: bookIdParam, input: fieldVariables.credits },
      });
      if (data?.updateCredits) {
        reset();
        toast({
          title: "Credits Updated.",
          description: `Credits have been updated successfully!`,
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

  return (
    <form onSubmit={onSubmit}>
      <Box>
        <Table>
          <Tbody>
            {credits.map((credit, index) => (
              <Tr key={credit.id}>
                <Td>{credit.creatorName}</Td>
                <Td>{credit.role}</Td>
                <Td>{credit.position}</Td>
                <Td>{credit.featured} </Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      setSelectedCreator(credit.creator);
                      entryForm.setValue("id", credit.id);
                      entryForm.setValue("creatorId", credit.creator.id);
                      entryForm.setValue("roleId", credit.role);
                      entryForm.setValue("position", credit.position);
                      entryForm.setValue("featured", credit.featured);
                    }}
                  >
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="red" onClick={() => remove(index)}>
                    <FiTrash2 />
                  </Button>
                </Td>
              </Tr>
            ))}
            <Tr>
              <Td>Form</Td>
            </Tr>
            <Tr>
              <Td>
                {/* <ApolloAutoSuggest
                  displayValue={(item) => item?.displayName ?? ""}
                  getSuggestionsFromResult={(result) =>
                    result.data.creators.nodes as Creator[]
                  }
                  placeholder="Choose Creator"
                  refetch={refetch}
                  value={selectedCreator}
                  setValue={setSelectedCreator}
                /> */}
              </Td>
              <Td>
                {/* <ApolloAutoSuggest
                  displayValue={(item) => item?.na ?? ""}
                  getSuggestionsFromResult={(result) =>
                    result.data.creators.nodes as UserRole[]
                  }
                  placeholder="Choose Role"
                  refetch={refetch}
                  value={selectedRole}
                  setValue={setSelectedRole}
                /> */}
              </Td>
              <Td>
                <Input id="position" {...entryForm.register("position")} />
              </Td>
              <Td>
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  defaultIsChecked={false}
                  {...entryForm.register("featured")}
                />
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    append({
                      creatorId: entryForm.getValues("creatorId"),
                      roleId: entryForm.getValues("roleId"),
                      position: entryForm.getValues("position"),
                      featured: entryForm.getValues("featured"),
                    });
                    entryForm.reset();
                  }}
                >
                  Add
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </form>
  );
}

export default BookCreditsForm;
