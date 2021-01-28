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
  width: 30rem;
`;

const StyledIcon = styled(Icon)`
  margin: 0;
  padding: 0;
`;

const SearchBox = () => {
  return (
    <SearchFrame>
      <Icon name="search" size="2rem" />
      <SearchInput placeholder="Search..." />
    </SearchFrame>
  );
};

export default SearchBox;
