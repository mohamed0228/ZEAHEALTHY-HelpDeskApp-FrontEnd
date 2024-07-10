
import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateTicketForm.module.css'; // Importing the CSS module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'; // Import Link from Next.js

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const CreateTicketForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/tickets`, { name, email, description });
      setName('');
      setEmail('');
      setDescription('');
      setError(null);
      toast.success('Ticket created successfully!');
    } catch (error) {
      setError('Error creating ticket. Please try again.');
    }
  };

  return (
    <>
      <button className={styles.backButton} onClick={() => window.history.back()}>Back to Home</button>
      <form className={styles.createTicketForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.formInput}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className={styles.formInput}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={styles.formTextarea}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={styles.formSubmitButton} type="submit">
          Submit Ticket
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateTicketForm;
