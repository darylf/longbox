import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'sidebar'
    'footer';

  @media (min-width: 500px) {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
      'header  header'
      'sidebar content'
      'sidebar footer';
  }
`;

export default Layout;
