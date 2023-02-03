import React from 'react'
import "./App.css"


export const Result = (props) => {
  return (
    <div className='result-screen'>
        {props.children}
    </div>
  )
}
