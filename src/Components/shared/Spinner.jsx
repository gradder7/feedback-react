import React from 'react'
import spinnerimg from '../assets/spinner.gif'
export default function Spinner() {
  return (
    <img src={spinnerimg} alt="loading" style={{width:'100px',margin:'auto',display:'block'}} />
  )
}
