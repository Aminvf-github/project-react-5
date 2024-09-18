import React from 'react'

const Input = ({type="text",placeholder="",handleChange, id=""}) => {
  return <>
  <label htmlFor={id}>{id}: </label>
  <input id={id}  type={type} placeholder={placeholder} onChange={(e)=>handleChange(e.target.value) } className='border-none outline-none rounded-sm p-1 w-72' />
  </>
}

export default Input