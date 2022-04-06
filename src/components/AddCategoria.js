import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategoria = ({setCategoria}) => {

    const [inputvalue, setInputvalue] = useState('');

    const ingresarvalor = (e) => {
        setInputvalue(e.target.value)
    };

    const AgregarCategoria = (e) => {
        e.preventDefault();
        if (inputvalue.trim().length > 2) {
            setCategoria(cat => [inputvalue,...cat]);
            setInputvalue('');
        }        
    };
    return (
        <form onSubmit={AgregarCategoria}>
            <input
                type="text"
                value={inputvalue}
                onChange={ingresarvalor}
                placeholder="Buscar Gifs"
                ></input>
        </form>
    )
};

AddCategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default AddCategoria