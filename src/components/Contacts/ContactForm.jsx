import { useLocalStorage } from 'components/App';
import css from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/store';

export default function ContactForm() {
  const [name, setName] = useLocalStorage('name', ' ');
  const [phone, setPhone] = useLocalStorage('phone', ' ');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const names = contacts.map(obj => obj.name);

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setPhone(value);
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const newContact = { name, phone };
    if (!names.includes(name)) {
      dispatch(addContactThunk(newContact));
    } else {
      alert(`${name} is already in contacts`);
    }
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.Form}>
      <label htmlFor="name" id="name-label">
        
        <input
          placeholder="Enter your name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputChangeHandler}
          className={css.FormItem}
        />
      </label>
      <label htmlFor="number" id="number-label">
        
        <input
          placeholder="Enter phone number"
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Phone number must be in the format xxx-xxx-xxxx"
          required
          value={phone}
          onChange={inputChangeHandler}
          className={css.FormItem}
        />
      </label>
      <button type="submit" className={css.FormBtn}>
        Add contact
      </button>
    </form>  
  );
}
