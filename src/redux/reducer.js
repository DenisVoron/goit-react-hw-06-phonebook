//файл объявления функций - редюсеров для обновления состояния

//=============== Reducer Slice ========================
//этот файл больше не нужен для слайса

const initialState = {
    contacts: [
        {
            id: '01',
            name: 'wqewwqewqe',
            number: '213213213123',
        },
        {
            id: '02',
            name: 'ghgjgjghjgj',
            number: '2132768687678',
        },
        {
            id: '03',
            name: 'bnmnbmbnmmn',
            number: '687868678768',
        }
    ],
    filter: "",
};

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case "contacts/addContacts": {
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload,
                ],
            };

        }
        case "contacts/deleteСontacts":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        default:
            // Каждый редюсер получает все экшены отправленные в стор.
            // Если редюсер не должен обрабатывать какой-то тип экшена,
            // необходимо вернуть существующее состояние без изменений.
            return state;
    }
};