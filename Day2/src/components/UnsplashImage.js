import React from 'react'
import styled from 'styled-components'
import '../App.css'


export const UnsplashImage = ({ url, key}) => {

  const Img = styled.img``;
  return (
    <div className='gallery'>
      <Img className='image' src={url} key={key } alt=""></Img>
    </div>
    
  )
}
