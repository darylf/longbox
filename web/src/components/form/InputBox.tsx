import * as React from 'react';
import styled from 'styled-components';

interface InputProps {
  label: string;
  name: string;
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  register: any;
  required?: boolean;
  defaultValue?: string | null;
}

export const InputBox = ({
  label,
  name,
  register,
  type = 'text',
  required = false,
  defaultValue
}: InputProps): JSX.Element => {
  const cleanName = name.toLowerCase().trim().replace(/ /g, '_');
  return (
    <>
      <Field>
        <Label htmlFor={`book_${cleanName}`}>{label}:</Label>
        <Input
          id={`book_${cleanName}`}
          type={type}
          name={name}
          ref={register({ required })}
          defaultValue={defaultValue}
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
