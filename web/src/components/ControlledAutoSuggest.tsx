import React, { ReactElement, useState } from "react";
import Autosuggest from "react-autosuggest";

export interface ControlledAutoSuggestProps<T> {
  displayValue(item: T | undefined): string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<T | undefined>>;
  value: T | undefined;
  getSuggestions(searchValue: string, suggestions?: Array<T>): Array<T>;
  renderSuggestion(suggestion: T): ReactElement;
  suggestions: Array<T>;
}

function ControlledAutoSuggest<T>({
  displayValue,
  getSuggestions,
  renderSuggestion,
  suggestions: suggestionList,
}: ControlledAutoSuggestProps<T>) {
  const [textValue, setTextValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<T>>([]);

  return (
    <Autosuggest
      inputProps={{
        placeholder: "Select a thing",
        value: textValue,
        onChange: (event, { newValue }) => {
          setTextValue(newValue);
          setSuggestions(getSuggestions(newValue, suggestionList));
        },
      }}
      onSuggestionsFetchRequested={async (value) => {
        // if (!value) return;
        return value;
      }}
      onSuggestionsClearRequested={() => {
        setSuggestions([]);
      }}
      getSuggestionValue={displayValue}
      renderSuggestion={renderSuggestion}
      suggestions={suggestions}
    />
  );
}

export default ControlledAutoSuggest;
