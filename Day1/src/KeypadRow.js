import React from 'react'
import "./App.css"


export const KeypadRow = (props) => {
  return (
    <div className='keypad_row'>
        {props.children}
    </div>
  )
}
