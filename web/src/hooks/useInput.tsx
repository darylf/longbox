import * as React from 'react';
import { useState } from 'react';

interface ReturnType<T extends HTMLSelectElement | HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  reset: () => void;
  bind: {
    value: string;
    onChange: (event: React.ChangeEvent<T>) => void;
  };
}

export const useInput = (initialValue = ''): ReturnType<HTMLInputElement> => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(value),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      }
    }
  };
};

export const useSelectInput = (
  initialValue = ''
): ReturnType<HTMLSelectElement> => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(value),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.currentTarget.value);
      }
    }
  };
};
