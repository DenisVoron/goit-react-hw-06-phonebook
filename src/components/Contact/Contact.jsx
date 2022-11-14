import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/actions";

import css  from './Contact.module.css';

export const Contact = ({contact}) => {
    console.log(contact);

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContacts(contact.id));

    return (
        <>
            <p className={css.contactDescr}>{contact.name}: <span>{contact.number}</span></p>
            <button type="button" className={css.contactBtn} onClick={handleDelete}>
                Delete
            </button>
        </>
    );
}