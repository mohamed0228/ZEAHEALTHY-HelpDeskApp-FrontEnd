// // components/CreateTicketForm.tsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api'; // Your backend API URL

// const CreateTicketForm: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/tickets`, { name, email, description });
//       alert('Ticket created successfully!');
//       setName('');
//       setEmail('');
//       setDescription('');
//     } catch (error) {
//       setError('Error creating ticket. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button type="submit">Submit Ticket</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default CreateTicketForm;
// components/CreateTicketForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const API_URL = 'http://localhost:5000/api'; // Your backend API URL

const CreateTicketForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/tickets`, { name, email, description });
      alert('Ticket created successfully!');
      setName('');
      setEmail('');
      setDescription('');
    } catch (error) {
      setError('Error creating ticket. Please try again.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <SubmitButton type="submit">Submit Ticket</SubmitButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledForm>
  );
};

export default CreateTicketForm;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledForm = styled.form`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

