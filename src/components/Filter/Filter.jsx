import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter, changeFilter } from "../../redux/contactsSlice";
//import { changeFilter } from "../../redux/contactsSlice";
//import { setFilter } from "../../redux/filtersSlice";

import css from './Filter.module.css';

export const Filter = () => {

    const contactsFilter = useSelector(getFilter);
    console.log(contactsFilter);
    const dispatch = useDispatch();
    const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));


    return (
        <label htmlFor="" className={css['inpyt-filter']}>
            Find contacts by name
            <input
                type="text"
                name="filter"
                value={contactsFilter}
                onChange={changeFieldFilter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
        </label>
    );
    
};

Filter.prototype = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}