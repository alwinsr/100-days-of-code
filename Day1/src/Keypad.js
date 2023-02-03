import React from 'react'
import { KeypadRow } from './KeypadRow.js'
import { Button } from './Button.js'
import "./App.css"

export const Keypad = (props) => {
  return (
    <div className='keypad'>
        <div>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>C</Button>
            <Button onButtonPress={props.onButtonPress}>&larr;</Button>
            <Button onButtonPress={props.onButtonPress}>/</Button>
            <Button onButtonPress={props.onButtonPress}>*</Button>
        </KeypadRow>    
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button onButtonPress={props.onButtonPress}>-</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button onButtonPress={props.onButtonPress}>+</Button>    
        </KeypadRow>    
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button onButtonPress={props.onButtonPress} type="col">=</Button>
        </KeypadRow>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress} type="large">0</Button>
            <Button onButtonPress={props.onButtonPress}>.</Button>
        </KeypadRow>
        </div>
    </div>
  )
}
