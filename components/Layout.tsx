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
  background-color: #eaf2f8; /* Light blue background */
  color: #333; /* Dark text color for contrast */
  padding: 20px 0;
`;

const FooterContent = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;
