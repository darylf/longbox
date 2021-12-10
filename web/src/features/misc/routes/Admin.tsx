import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import ControlledAutoSuggest from "../../../components/ControlledAutoSuggest";
import { Head } from "../../../components/Head";
import { useLoginState } from "../../../hooks/useAuthentication";

/** ************************************************** */
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(searchValue: string, suggestions: Item[]): Item[] {
  const escapedValue = escapeRegexCharacters(searchValue.trim());

  if (escapedValue === "") return [];

  const regex = new RegExp(escapedValue, "i");

  return suggestions.filter((item) => regex.test(item.name));
}

type Item = { id: string; name: string };
const TestComponent2 = function (): ReactElement {
  const suggestions: Array<Item> = [
    { id: "1", name: "Creator" },
    { id: "2", name: "Author" },
    { id: "3", name: "Writer" },
  ];
  const [selectedSuggestion, setSelectedSuggestion] = useState<
    Item | undefined
  >();

  return (
    /* eslint-disable react/jsx-no-useless-fragment */
    <ControlledAutoSuggest
      suggestions={suggestions}
      renderSuggestion={(suggestion) => <>{suggestion.name}</>}
      displayValue={(suggestion: Item) => suggestion.name}
      placeholder="Choose something"
      setValue={setSelectedSuggestion}
      getSuggestions={getSuggestions}
      value={selectedSuggestion}
    />
    /* eslint-enable react/jsx-no-useless-fragment */
  );
};

const TestComponent3 = function (): ReactElement | null {
  // const suggestions: Array<Creator> = [];
  // const [selectedSuggestion, setSelectedSuggestion] = useState<
  //   Creator | undefined
  // >();
  // const { refetch } = useCreatorsSearchQuery();

  // async function getSuggestions2(searchValue: string): Creator[] {
  //   const result = await refetch({ search: searchValue }); //.then(result => result.data.creators.nodes)
  //   return result.data.creators as Creator[];
  // }

  // return (
  //   <ControlledAutoSuggest
  //     suggestions={suggestions}
  //     renderSuggestion={(suggestion) => <>{suggestion.displayName}</>}
  //     displayValue={(suggestion) => suggestion?.displayName ?? ""}
  //     placeholder="Choose something"
  //     setValue={setSelectedSuggestion}
  //     getSuggestions={getSuggestions2}
  //     value={selectedSuggestion}
  //   />
  // );
  return null;
};

const AdminPage = function (): ReactElement {
  const { authenticated } = useLoginState();
  if (!authenticated) {
    return (
      <Stack p={6}>
        <Heading>Access denied</Heading>
        <Text>Please log in using the link in the header.</Text>
      </Stack>
    );
  }
  return (
    <>
      <Head title="Settings" />
      <Stack p={6}>
        <Heading>Administration</Heading>
        <Text>Coming soon.</Text>
        <Box borderWidth="2">
          <TestComponent2 />
        </Box>
      </Stack>
    </>
  );
};

export default AdminPage;
