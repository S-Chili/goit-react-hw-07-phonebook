import { useEffect } from 'react';
import css from './Contacts.module.css'
import Filter from './Filter';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/store';
import { getContactsThunk } from 'redux/store';

function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const clickHandler = id => {
   dispatch(deleteContactThunk(id));
 };

 useEffect(() => {
   dispatch(getContactsThunk());
 }, [dispatch]);

  return (
   <div>
      <Filter filter={filter} />
         <ul>{filteredContacts.map((contact) => (
               <li key={contact.id} className={css.ContactListItem}>
               <p>{contact.name}</p>
               <p className={css.TitlePhoneNumber}>{contact.phone}</p>
                  <button onClick={() => clickHandler(contact.id)} className={css.FormBtn}>Delete</button>
               </li>
            ))}
         </ul>
   </div>     
  );
}

export default Contacts;