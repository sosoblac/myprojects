 const ValidateForm = (formInputs)=>{
    const Formerors= {}
    if (formInputs.name ===''){
        Formerors.name = 'Please fill in a name'
    } 
    if (formInputs.email ===''){
        Formerors.email = 'Please fill in a valid email'
    }
    if (formInputs.message ===''){
        Formerors.message = 'Please fill in a message'
    }
    return Formerors
}

export default ValidateForm