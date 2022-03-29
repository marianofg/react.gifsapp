import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategoria from './components/AddCategoria';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    //const categorias = ['One Punch','Samurai X','Dragon Ball'];
  const [categorias,setCategorias] = useState(['Dragon Ball']);
   
  const btnagregarcategoria = () =>{
      setCategorias([...categorias,'asasas']);
      
  }
  
  return (
    <>
        <h2>GifExpertApp</h2>
        <hr/>
        <AddCategoria setCategoria={setCategorias}></AddCategoria>
        <ol>
            {
                categorias.map(categoria =>{
                    return <GifGrid key={categoria} categoria={categoria}></GifGrid>
                })
            }
        </ol>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp