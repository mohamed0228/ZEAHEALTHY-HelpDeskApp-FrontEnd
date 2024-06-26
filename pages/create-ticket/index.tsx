// pages/create-ticket/index.tsx
import Layout from '../../components/Layout';
import CreateTicketForm from '../../components/CreateTicketForm';

const CreateTicketPage: React.FC = () => (
  <Layout>
    <h1>Create a Ticket</h1>
    <CreateTicketForm />
  </Layout>
);

export default CreateTicketPage;
