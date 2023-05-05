import Header from './Header';
import styled from 'styled-components';

const Content = styled.main`
  margin: 45px auto 0;
  max-width: 930px;
  width: 100%;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>
        <div>{children}</div>
      </Content>
    </>
  );
}

export default Layout;
