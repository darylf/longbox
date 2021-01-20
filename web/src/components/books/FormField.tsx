import * as React from 'react';
import styled from 'styled-components';

type TFormInputProps = {
  label: string;
  bind: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
};

interface TextBoxProps extends TFormInputProps {
  type: 'text' | 'email' | 'phone' | 'url';
  value: string;
}

export const FormField = ({
  label,
  type,
  value,
  bind
}: TextBoxProps): JSX.Element => {
  return (
    <Field>
      <Label>
        {label}:
        <Input type={type} value={value} {...bind} />
      </Label>
    </Field>
  );
};

const Field = styled.div`
  margin: 3em 0;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #333;
  padding: 0.5em 1em;
  display: block;
`;
