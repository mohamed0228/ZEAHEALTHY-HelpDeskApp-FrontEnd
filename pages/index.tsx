import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  // Move any client-specific logic into useEffect
  React.useEffect(() => {
    // Client-side only logic can go here
  }, []);

  return (
    <Layout>
      <div
        style={{
          padding: '40px',
          background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
          borderRadius: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '40px auto',
          animation: 'fadeIn 1s ease-in-out'
        }}
      >
        <h1
          style={{
            color: '#2c3e50',
            marginBottom: '20px',
            fontSize: '2.5rem',
            animation: 'fadeIn 1s 0.2s ease-in-out backwards'
          }}
        >
          Welcome to Help Desk App
        </h1>
        <p
          style={{
            color: '#7f8c8d',
            marginBottom: '30px',
            fontSize: '1.2rem',
            animation: 'fadeIn 1s 0.4s ease-in-out backwards'
          }}
        >
          This is a simple help desk application where users can submit support tickets and admins can manage them.
        </p>
        <h2
          style={{
            color: '#34495e',
            marginBottom: '20px',
            fontSize: '1.8rem',
            animation: 'fadeIn 1s 0.6s ease-in-out backwards'
          }}
        >
          Navigation
        </h2>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            animation: 'fadeIn 1s 0.8s ease-in-out backwards'
          }}
        >
          <li style={{ display: 'inline-block' }}>
            <Link href="/create-ticket" passHref>
              <button
                style={{
                  padding: '15px 25px',
                  backgroundColor: '#2980b9',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                Create Ticket
              </button>
            </Link>
          </li>
          <li style={{ display: 'inline-block' }}>
            <Link href="/admin-panel" passHref>
              <button
                style={{
                  padding: '15px 25px',
                  backgroundColor: '#2980b9',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                Admin Panel
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default HomePage;
