import { Options } from 'graphql/utilities/extendSchema';
import * as React from 'react';
import styled from 'styled-components';

export type ListItem = { label: string; value: string };

interface Props {
  label: string;
  defaultSelected?: string;
  items: Array<ListItem>;
  bind: {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
}

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #333;
  padding: 0.5em 1em;
  display: block;
`;

function generateHtmlId(str: string): string {
  return str.toLowerCase().trim().replace(' ', '-');
}

const DropDown = ({
  bind,
  defaultSelected = '',
  label = '',
  items = []
}: Props): JSX.Element => {
  const htmlId = generateHtmlId(label);
  return (
    <>
      <Label htmlFor={htmlId}>{label}</Label>
      <Select id={htmlId} value={defaultSelected} {...bind}>
        <option value=""></option>
        {items.map((item: ListItem) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </>
  );
};

export default DropDown;
