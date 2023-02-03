import React from 'react'
import { Result } from './Result'
import { Computation } from './Computation'


export const Screen = (props) => {
  return (
    <section className='screen'>
        <Result> {props.result} </Result>
        <Computation>{props.equation}</Computation>
    </section>
  )
}
