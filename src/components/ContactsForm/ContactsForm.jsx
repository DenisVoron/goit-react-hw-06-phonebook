import PropTypes from 'prop-types';
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addContacts, getContacts } from "../../redux/contactsSlice";
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import css from './ContactsForm.module.css';


export function ContactsForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const {contact}= useSelector(getContacts);
    console.log(contact);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const addContact = {
            id: nanoid(),
            name,
            number,
        };

        contact.some(currentName => currentName.name.toLowerCase() === name.toLowerCase())
      ? toast.warn(`${name} is already in contact`)
      : dispatch(addContacts(addContact));

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };
    

    const handleNameChange = event => {
        const {name, value} = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    return (
        <div className={css.wrapper}>
            <form autoComplete='off' className={css.form} onSubmit={handleSubmit}>
                <label className={css['form-label']}>
                    Name
                    <input
                        type="text"
                        className={css.input}
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleNameChange}
                    />
                </label>
                <label htmlFor="">
                    Number
                    <input
                        type="tel"
                        className={css.input}
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleNameChange}
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        </div>
    );

}

ContactsForm.propTypes = {
    props: PropTypes.func,
}