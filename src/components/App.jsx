import ContactForm from './Contacts/ContactForm';
import Contacts from './Contacts/Contacts';
import Wrapper from './Contacts/Wrapper';
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });
  return [state, setState];
};

export default function App() {

  return (
    <div>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Contacts/>
      </Wrapper>
    </div>
         
  )
}  