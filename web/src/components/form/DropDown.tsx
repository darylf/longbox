import * as React from 'react';
import styled from 'styled-components';

export type ListItem = { label: string; value: string };

interface Props {
  label: string;
  defaultValue?: string;
  items: Array<ListItem>;
  bind: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
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
  defaultValue = '',
  label = '',
  items = []
}: Props): JSX.Element => {
  const htmlId = generateHtmlId(label);
  return (
    <>
      <Label htmlFor={htmlId}>{label}</Label>
      <Input
        id={htmlId}
        value={defaultValue}
        list={`${htmlId}-list`}
        {...bind}
      />
      <datalist id={`${htmlId}-list`}>
        {items.map((item: ListItem) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </datalist>
    </>
  );
};

export default DropDown;
