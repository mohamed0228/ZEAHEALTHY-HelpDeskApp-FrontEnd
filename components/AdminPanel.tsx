import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AdminPanel.module.css'; // Importing the CSS module

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'; // Ensure to use the environment variable if available

interface Ticket {
  id: number;
  name: string;
  email: string; // Include email in Ticket interface
  description: string;
  status: string;
  response?: string;
}

const AdminPanel: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('New');

  const fetchTickets = async () => {
    try {
      const response = await axios.get<Ticket[]>(`${API_URL}/admin/tickets`);
      setTickets(response.data);
    } catch (error) {
      setError('Error fetching tickets. Please try again.');
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    if (!selectedTicket) {
      fetchTickets();
    }
  }, [selectedTicket]);

  const handleTicketSelect = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setResponse(ticket.response || '');
    setStatus(ticket.status);
  };

  const handleResponseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResponse(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleUpdateTicket = async () => {
    if (!selectedTicket) return;
    try {
      await axios.put(`${API_URL}/admin/tickets/${selectedTicket.id}`, { response, status });
      toast.success('Ticket updated successfully!');
      setSelectedTicket(null); // Reset selected ticket to trigger re-fetch
      fetchTickets(); // Optionally refetch tickets after successful update
    } catch (error) {
      setError('Error updating ticket. Please try again.');
    }
  };

  return (
    <div className={styles.adminPanel}>
      <button className={styles.backButton} onClick={() => window.history.back()}>Back to Home</button>
      <h2>Tickets List</h2>
      <h3>Please click a ticket to select</h3>
      <ul className={styles.ticketList}>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            className={`${styles.ticketItem} ${selectedTicket?.id === ticket.id ? styles.selectedTicket : ''}`}
            onClick={() => handleTicketSelect(ticket)}
          >
            <div className={styles.ticketHeader}>
              <span>{ticket.name}</span>
              <br/> <br/> <br/>
              <span style={{color :"black", fontWeight:"bolder"}}>{ticket.email}</span> {/* Display email */}
            </div>
            <div className={styles.ticketContent}>
              <p>{ticket.description.substring(0, 25)}...</p> {/* Show truncated description */}
              <span style={{color :"green", fontWeight:"bolder"}}>Status: {ticket.status}</span>
            </div>
          </li>
        ))}
      </ul>

      {selectedTicket && (
        <div className={styles.selectedTicket}>
          <h3>Selected Ticket: {selectedTicket.id}</h3>
          <h4>Description</h4>
          <p>{selectedTicket.description}</p>
          <h4>Drop comment or response</h4>
          <textarea className={styles.responseTextArea} value={response} onChange={handleResponseChange} />
          <h3>Status</h3>
          <select className={styles.statusSelect} value={status} onChange={handleStatusChange}>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <button className={styles.updateButton} onClick={handleUpdateTicket}>
            Update Ticket
          </button>
        </div>
      )}

      {error && <p className={styles.errorMessage}>{error}</p>}
      {/* ToastContainer for toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default AdminPanel;
