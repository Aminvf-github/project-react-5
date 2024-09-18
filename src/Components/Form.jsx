import React from 'react'
import Input from './Input'
import { useState } from 'react'

const Form = () => {
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [showResult, setshowResult] = useState(false)
    const handlesetUserName = (result) =>{
        setUserName(result)
    }
    const handlesetPassword = (result) =>{
        setPassword(result)
    }
    const handleForm = (e) =>{
        e.preventDefault();

        setshowResult(!showResult)
    }
  return<>
  <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 h-96 rounded-lg flex flex-row justify-center items-center'>
  <form action="">
    <Input id="username" placeholder='enter userName' type='text' handleChange={handlesetUserName} />
    <br /> <br />
    <Input id="Password" placeholder='enter Password' type='password' handleChange={handlesetPassword}   />
    <br /> <br /> <br />
    <button onClick={handleForm} className='bg-red-500 text-white p-2 rounded-md'>Show result</button>
  </form>
  <div>
        {showResult === true &&(
            <div className='relative right-60 top-16'>
            <b>
            UserName:{UserName}
            <br />
            Password:{Password}
            </b>
            </div>
        )}
  </div>
  </div>
  </>
}

export default Form