import * as React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const SearchFrame = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #cecece;
  padding: 0.6rem;
`;

const SearchInput = styled.input`
  border: 0;
  font-size: 1rem;
  padding: 0.5rem;
  width: 40%
  min-width: 14rem;
`;

const SearchBox = (): JSX.Element => {
  return (
    <SearchFrame>
      <Icon name="search" size="2rem" />
      <SearchInput type="search" placeholder="Search..." />
    </SearchFrame>
  );
};

export default SearchBox;
