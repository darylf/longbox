import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'header content'
    'sidebar content'
    'sidebar footer';
`;

export default Layout;
