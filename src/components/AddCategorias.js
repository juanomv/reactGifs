import React, { useState } from 'react'
import PropTypes from 'prop-types'
const AddCategorias = ({setCategorias}) => {
    const [inputValue,SetinputValue] = useState('');
    const handelInput=(e)=>{
        
        SetinputValue(e.target.value)
    }
    const handelSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategorias(cats => [ inputValue,...cats ]);
            SetinputValue('');
        }
        
    }
    return (
        <form onSubmit={handelSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handelInput}
                placeholder="Que Gifs Buscas?"
                />
        </form>
            
       
    )
}
AddCategorias.propTypes={
    setCategorias: PropTypes.func.isRequired
}
export default AddCategorias
