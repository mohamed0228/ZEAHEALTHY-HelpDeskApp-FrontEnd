import { NextApiRequest, NextApiResponse } from 'next';

// Define a type for ticket data
type TicketData = {
  name: string;
  email: string;
  description: string;
};

// Example API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Parse and validate ticketData
      const ticketData: TicketData = req.body;

      // Handle ticket creation logic here
      // Example: save to database, send confirmation email, etc.
      
      res.status(200).json({ message: 'Ticket created successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating ticket.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
