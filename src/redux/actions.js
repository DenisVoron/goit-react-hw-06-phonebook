//файл объявления экшенов приложения
import { nanoid } from 'nanoid';

export const addContacts = (name, number) => {

    return {
        type: "contacts/addContacts",
        payload: {
            id: nanoid(),
            name,
            number,
        },
    }

    /*contacts.some(currentName => currentName.name === name)
        ? toast.warn(`${name} is already in contact`)
        : setContacts([contactObj, ...contacts]);*/
};

export const deleteContacts = contactId => {
    return {
        type: "contacts/deleteContacts",
        payload: contactId,
    };

    //setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
};















//=====================Этот файл не нужен для Слайс ====================



/*export const setStatusFilter = value => {
    return {
        type: "filters/setStatusFilter",
        payload: value,
    };
};*/

/*import { createAction } from "@reduxjs/toolkit";

export const setStatusFilter = createAction("filters/setStatusFilter");*/