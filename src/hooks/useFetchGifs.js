import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
  
  const [gif, setGif] = useState({
      data:[],
      loading: true
  });

  useEffect(() =>{
      getGifs(categoria)
      .then(img =>{
        setGif({
            data:img,
            loading: false});
      }
      )
  },[categoria])
    return gif;
}
