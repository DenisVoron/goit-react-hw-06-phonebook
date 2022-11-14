import PropTypes from 'prop-types'

import { useSelector } from "react-redux";

import { getContacts } from "../../redux/selectors";
import { Contact } from '../Contact/Contact';


import css from './ContactList.module.css';

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    console.log(contacts);

    //const contact = contacts.map((contact) => contact.id);
    //console.log(contacts.map((contact) => contact.id));
    //console.log(contact);
    

    return (
        <ul>
        {contacts.map((contact) => (
            <li key={contact.id} className={css['list-item']}>
                <Contact contact={contact} />
            </li>
        ))}
    </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
};