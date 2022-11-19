import PropTypes from 'prop-types'

import { useSelector } from "react-redux";

import { getContacts, getFilter } from "../../redux/contactsSlice";
import { Contact } from '../Contact/Contact';

import css from './ContactList.module.css';

export const ContactList = () => {
    
    const {contact} = useSelector(getContacts);
    console.log(contact);
    const {filter} = useSelector(getContacts);
    console.log(filter);

    const contactsFilter = () => {
        const filterNormalize = filter//.toLowerCase();

        return contact.filter(contact =>
            contact.name.toLowerCase().includes(filterNormalize)
        );
    };
    
    const filteredContacts = contactsFilter();

    return (
        <ul>
            {filteredContacts.map((contact) => (
                <li key={contact.id} className={css['list-item']}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
};