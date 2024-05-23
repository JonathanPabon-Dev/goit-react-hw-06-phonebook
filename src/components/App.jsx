import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { setContacts } from '../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 className="mt-5">Phonebook</h1>
      <ContactForm />

      <h2 className="mt-5">Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
