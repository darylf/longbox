import * as React from 'react';

interface ReturnType<T> {
  formFields: T;
  createChangeHandler: (
    key: keyof T
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useFormFields<T>(initialValues: T): ReturnType<T> {
  const [formFields, setFormFields] = React.useState<T>(initialValues);
  const createChangeHandler = (key: keyof T) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setFormFields((prev: T) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler };
}
