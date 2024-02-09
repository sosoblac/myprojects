import React, { useState } from 'react'
import './alert.css'

function AlertComponent({formInputs,setShowAlert,setFormInputs}) {
  const [show, setShow] = useState(true)

  const handleClose = ()=>{
    setShowAlert(state=>!state)
    setFormInputs({
      name:'',
      email:'',
      message:''})
    setShow(!show)

  }
  return (
    <>
    {show && 
    <div className='alert'>
        <button className='close' onClick={handleClose}>X</button>
        <img className='profileimg' src="./images/1.jpg" alt="" />
        <p>Welcome message {formInputs.name}</p>
        <button className='transparent'>Continue with google</button>
       
      
    </div>
    }
    
    </>
    
  )
}

export default AlertComponent
