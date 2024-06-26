// import React, { ReactNode } from 'react';
// import Head from 'next/head';

// type LayoutProps = {
//   children: ReactNode;
// };

// const Layout: React.FC<LayoutProps> = ({ children }) => (
//   <div>
//     <Head>
//       <title>Help Desk App</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <main>{children}</main>

//     <footer>
//     <p>&copy; 2024 mohammed amin boussaada</p>
//     <p>2013440925
//     </p>
//     <p>mohammedaminboussaada@gmail.com</p>
//     </footer>
//   </div>
// );

// export default Layout;
import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container>
    <Head>
      <title>Help Desk App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>{children}</Main>

    <Footer>
      <FooterContent>
        <FooterText>&copy; 2024 Mohammed Amin Boussaada</FooterText>
        <FooterText>2013440925</FooterText>
        <FooterText>mohammedaminboussaada@gmail.com</FooterText>
      </FooterContent>
    </Footer>
  </Container>
);

export default Layout;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;
