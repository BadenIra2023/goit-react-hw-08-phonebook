import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact} from "../../redux/operations";

export const ContactsList = () => {
   const contacts = useSelector(store => {
    return store.contacts.contacts.items;
   });
  const filter = useSelector(store => {
    return store.filter.filter;
  });
  const dispatch = useDispatch();
 return (<>
    <h2 className={css.title}>Contacts</h2>
    <ul>
    {contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      .map(contact => (
             <li className={css.item} key={contact.id}>
                 <p>{contact.name} :</p>
                 <p>{contact.phone}</p>
             <button type="button" className={css.delete}
               onClick={() => dispatch(deleteContact(contact.id))} 
          >
            <span className={css.buttdel}>Delete</span>
            </button></li>
      ))}
    </ul>
    </>)
}



ContactsList.prototype = {
  deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf ({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired, })
};