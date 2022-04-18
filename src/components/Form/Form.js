import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button } from './Form.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleChangeName = (event) => {
    setName(event.target.value)
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            onChange={handleChangeName}
            id={nameId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number{' '}
          <input
            type="tel"
            name="number"
            onChange={handleChangeNumber}
            id={phoneId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
