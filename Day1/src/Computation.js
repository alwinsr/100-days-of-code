import React from 'react'
import "./App.css"


export const Computation = (props) => {
  return (
    <div className="computation-screen">
        {props.children}
     </div>
  )
}
