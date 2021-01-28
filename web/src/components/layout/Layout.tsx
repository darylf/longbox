import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-areas:
    'sidebar content'
    'sidebar footer';
`;

export default Layout;
