import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    //SubmitForm
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cast => [inputValue, ...cast]);
            setInputValue('');
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
