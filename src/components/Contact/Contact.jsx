import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.name}>
          <span className={css.icon}>👤</span>
          {contact.name}
        </p>
        <p>
          <span className={css.icon}>📞</span>
          {contact.number}
        </p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        🗑️
      </button>
    </li>
  );
};

export default Contact;
