import React from 'react';
import classes from './Search.module.css';
import cn from 'classnames';

const Search = ({ value, onChange, children, placeholder }) => {
    const inputClass = cn({
        [classes.input]: true,
        [classes.filled]: value
    })
    return (
        <label className={classes.label}>
            {children ? children : 'Search'}
            <input
                className={inputClass}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : 'Search...'} 
            />
        </label>
    )
}

export default Search