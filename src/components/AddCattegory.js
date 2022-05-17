import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCattegory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState();

    //! INPUT
    const handleInputChange = ( e ) =>{
        setInputValue( e.target.value );
    };

    //! SUBMIT
    const handleSubmit = ( e )=>{
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } >
            <input 
                type="text"
                value= { inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCattegory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



