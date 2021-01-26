import * as React from 'react';
import styled from 'styled-components';
interface ContentProps {
  children: React.ReactNode;
}

const StyledContent = styled.main`
  grid-area: content;
  padding: 1em;
`;

const Content: React.FunctionComponent<ContentProps> = ({
  children
}: ContentProps) => <StyledContent>{children}</StyledContent>;

export default Content;
