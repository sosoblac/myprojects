import React, { useState } from 'react'
import './countercomp.css'
import { useDispatch, useSelector } from 'react-redux'
import { increamentValue,decrementValue,resetValue,setValue } from '../../states/counter/counterSlice'

const Countercomp = () => {
    const [input, setInput] = useState(0)
    const value = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const setInputValue = (e)=>{
        if (e.target.value !=''){
            dispatch(setValue(parseInt(e.target.value)))
        }
    }
    const decrease = ()=>{
        setInput(input=>{
            if(input === 0){
                return input
            } else {
                return input - 1;
            }
        })
    }
    const increase = ()=>{
        setInput(input=>{
            return parseInt(input) + 1
        })
    }
    console.log(input)
    // write a program that prints out the number of seconds in a year
  return (
    <div className="counterContainer">
        <div className="counter">
            <button className="subtract" onClick={()=>dispatch(decrementValue())}>-</button>
            <div className="value">
                <input type='text' value={value} onChange={setInputValue} name='input' placeholder='number'/>
            </div>
            <button className="add" onClick={()=>dispatch(increamentValue())}>+</button>
        </div>
        <button className='reset' onClick={()=>dispatch(resetValue())}>Reset</button>
    </div>
  )
}

export default Countercomp
