import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ categoria }) => {

    
    const {data, loading} = useFetchGifs(categoria);


    return (
        <>
        <h3>{categoria}</h3>
        {loading && <p> cargando</p>}
        <div className='card-grid'>
                {data.map(({id,titulo,url}) =>{
                    return <GifGridItem key={id} titulo={titulo} url={url}></GifGridItem>
                })}
        </div>
        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid