import styled from 'styled-components';
import List from './List';
import ContactForm from './Form';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';

const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 32px;
  width: 95vw;
  margin: 0 auto;
  padding: 20px 0;
`;

const SubTitle = styled.div`
  font-size: 32px;
  width: 95vw;
  margin: 0 auto;
  padding: 20px 0;
`;

const App = () => {
  return (
    <Container>
      <Title>My Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <List />
      <Toaster />
    </Container>
  );
};

export default App;
