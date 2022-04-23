import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contacts-slice';
import Notification from '../Notification';

const StyledUl = styled.ul`
  padding-inline-start: 0;
`;

const Li = styled.li`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1cadca;
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;

  &:nth-child(2n) {
    background-color: #25515a;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  @media (min-width: 769px){
    width: 80%;
  };
  @media (min-width: 1024px) {
    width: 30%;
  })
`;

const Button = styled.button`
  width: 100px;
  min-width: 100px;
  height: 40px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 3px;
  margin-left: 10px;
  max-height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #cde2e5;
  }
  &:active {
    color: #ffffff;
    background-color: #b3c2c4;
  }
`;

function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContactList = filteredContacts();

  return (
    <StyledUl>
      {filteredContactList.map(({ id, name, number }) => {
          return (
            <Li key={id}>
              {name}: {number}
              <Button onClick={() => deleteSelectedContact(id)}>Delete</Button>
            </Li>
          );
        })}
      {contacts.length === 0 && <Notification />}
    </StyledUl>
  );
};

export default ContactList;
