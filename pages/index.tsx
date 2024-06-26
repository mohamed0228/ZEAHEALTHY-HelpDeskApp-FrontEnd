// // pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const HomePage: React.FC = () => {
  // Move any client-specific logic into useEffect
  React.useEffect(() => {
    // Client-side only logic can go here
  }, []);

  return (
    <Layout>
      <StyledHomePage>
        <Title>Welcome to Help Desk App</Title>
        <Description>This is a simple help desk application where users can submit support tickets and admins can manage them.</Description>
        <Subtitle>Navigation</Subtitle>
        <NavList>
          <NavItem>
            <Link href="/create-ticket" passHref>
              <NavButton>Create Ticket</NavButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin-panel" passHref>
              <NavButton>Admin Panel</NavButton>
            </Link>
          </NavItem>
        </NavList>
      </StyledHomePage>
    </Layout>
  );
};

export default HomePage;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHomePage = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
  max-width: 800px;
  margin: 40px auto;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2.5rem;
  animation: ${fadeIn} 1s 0.2s ease-in-out backwards;
`;

const Description = styled.p`
  color: #7f8c8d;
  margin-bottom: 30px;
  font-size: 1.2rem;
  animation: ${fadeIn} 1s 0.4s ease-in-out backwards;
`;

const Subtitle = styled.h2`
  color: #34495e;
  margin-bottom: 20px;
  font-size: 1.8rem;
  animation: ${fadeIn} 1s 0.6s ease-in-out backwards;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
  animation: ${fadeIn} 1s 0.8s ease-in-out backwards;
`;

const NavItem = styled.li`
  display: inline-block;
`;

// const NavAnchor = styled.a`
//   padding: 15px 25px;
//   background-color: #2980b9;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 30px;
//   font-size: 1.1rem;
//   transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     background-color: #3498db;
//     transform: scale(1.1);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }

//   &:visited,
//   &:focus,
//   &:active {
//     text-decoration: none;
//   }
// `;

const NavButton = styled.button`
  padding: 15px 25px;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #3498db;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;


