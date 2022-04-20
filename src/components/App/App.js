import './App.styled.css';
import { nanoid } from 'nanoid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  changeFilter,
  getContacts,
  getFilter,
} from 'redux/contactsSlice';
import ContactForm from '../Form/Form';
import ContactItems from '../ContactItems/ContactItems';
import Filter from '../Filter/Filter';

  // const INITIAL_STATE = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

export default function App() {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(`${name} This contact is already exist`)
      : dispatch(addContact(newContact));
  };

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));
  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  const filteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  // useEffect(() => {
  //   const storageContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storageContacts) ?? INITIAL_STATE;
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="App">
      <h1>My Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFieldFilter} />
      <ContactItems
        contacts={filteredContacts()}
        onDeleteContact={deleteSelectedContact}
      />
    </div>
  );
}
