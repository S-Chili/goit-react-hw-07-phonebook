import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';


const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  
  const inputHandler = e => {
    const { value } = e.target;
    const search = value.trim().toLowerCase();
    dispatch(setFilter(search));
  };
  
  return (
  <label>
    <input type="text" name="search" onChange={inputHandler} placeholder="Find contacts by name" className={css.FormItem}/>
  </label>
  )
};

export default Filter;

