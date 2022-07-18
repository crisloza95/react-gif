import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()

        inputValue.trim() && setCategories(state => state.includes(inputValue) ? state : [inputValue, ...state])
        inputValue === 'clear' && setCategories([])

        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
