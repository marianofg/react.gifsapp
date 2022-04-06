import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({id, titulo, url}) => {
  return (
    <div className='card animate__animated animate__bounce'>
        <img src={url} alt= {titulo}/>
            <p>{titulo}</p>
    </div>
  )
}

GifGridItem.propTypes = {
    titulo: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifGridItem