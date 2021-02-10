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

/**
 * @deprecated This component should be replaced with FormInput
 */
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

interface InputProps {
  label: string;
  name: string;
  register: any;
  required?: boolean;
}

export const FormInput = ({
  label,
  name,
  register,
  required = false
}: InputProps): JSX.Element => {
  const cleanName = name.toLowerCase().trim().replace(/ /g, '_');
  return (
    <>
      <Field>
        <Label htmlFor={`book_${cleanName}`}>{label}:</Label>
        <Input
          id={`book_${cleanName}`}
          type="text"
          name={name}
          ref={register({ required })}
        />
      </Field>
    </>
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
