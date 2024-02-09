import React, { useEffect, useState } from 'react'
import './form.css'
import ValidateForm from '../../ValidateForm'
import AlertComponent from '../alert/AlertComponent'

function Form() {

    useEffect(()=>{
        if(Object.keys(inputError).length === 0 && isSubmit){
            // alert(`Welcome ${formInputs.name}`)
            setIsSubmit(false)
            setShowAlert(true)
        }
    })
    const [formInputs,setFormInputs] = useState({
        name:'',
        email:'',
        message:''
    })

    const [inputError, setInputError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleChange = (e)=>{
        setFormInputs(formInput=>({...formInput,[e.target.name]: e.target.value}))
        setInputError(inputError=>({...inputError,[e.target.name]:''}))
    }
    
    const handleSubmit =(e)=>{
        setInputError(ValidateForm(formInputs))
        setIsSubmit(true)
    }

    console.log(inputError,'these are the input error')
    console.log(formInputs)
  return (
    <>
    <div className="form">
        <h1>Form</h1>
        {inputError?.name && <p style={{color:'red'}}>{inputError?.name}</p> }
        <div className="forminput">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Full name' onChange={handleChange} name='name' value={formInputs.name} />
        </div>
        {inputError?.email && <p style={{color:'red'}}>{inputError?.email}</p> }
        <div className="forminput">
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='email: soso@gmail.com' onChange={handleChange} name='email' value={formInputs.email} />
        </div>
        {inputError?.message && <p style={{color:'red'}}>{inputError?.message}</p> }
        <div className="forminput">
            <label htmlFor="message">Message</label>
            <textarea type="text" id='message' placeholder='message' onChange={handleChange} name='message' value={formInputs.message} />
        </div>
        <button className='button' onClick={handleSubmit}>Submit</button>

        {showAlert && <AlertComponent formInputs ={formInputs} setShowAlert={setShowAlert} setFormInputs={setFormInputs}/> }
        
        
    </div>
    </>
  )
}

export default Form
