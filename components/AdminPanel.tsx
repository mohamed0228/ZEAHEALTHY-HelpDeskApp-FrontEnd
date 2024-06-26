// components/AdminPanel.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const API_URL = 'http://localhost:5000/api'; // Your backend API URL

interface Ticket {
  id: number;
  name: string;
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
      alert('Ticket updated successfully!');
      setSelectedTicket(null); // Reset selected ticket to trigger re-fetch
    } catch (error) {
      setError('Error updating ticket. Please try again.');
    }
  };

  return (
    <StyledAdminPanel>
      <h2>Tickets List</h2>
      <h3>please click a ticket to select </h3>
      <TicketList>
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} onClick={() => handleTicketSelect(ticket)}>
            {ticket.name} - {ticket.status}
          </TicketItem>
        ))}
      </TicketList>

      {selectedTicket && (
        <SelectedTicket>
          <h3>Selected Ticket: {selectedTicket.id}</h3>
          <h4>description</h4>
          <p>{selectedTicket.description}</p>
          <h4>drop comment or response</h4>
          <ResponseTextArea value={response} onChange={handleResponseChange} />
          <h3>Status</h3>
          <StatusSelect value={status} onChange={handleStatusChange}>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </StatusSelect>
          <UpdateButton onClick={handleUpdateTicket}>Update Ticket</UpdateButton>
        </SelectedTicket>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledAdminPanel>
  );
};

export default AdminPanel;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledAdminPanel = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  h2 {
    color: #333;
    text-align: center;
  }
`;

const TicketList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TicketItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
  }
`;

const SelectedTicket = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ResponseTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const StatusSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const UpdateButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
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
