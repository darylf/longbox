import * as React from 'react';
import styled from 'styled-components';

interface ContentProps {
  children: React.ReactNode;
}

const StyledContent = styled.div`
  grid-area: content;
  padding: 2rem;
`;

const Content: React.FunctionComponent<ContentProps> = ({
  children
}: ContentProps) => <StyledContent>{children}</StyledContent>;

export default Content;
