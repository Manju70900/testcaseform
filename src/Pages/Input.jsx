import React,{useContext,useState} from 'react'
import {FormContext} from "../FormContext"

const Input = ({id,label,type}) => {
    // const [state,setState]=useState("")
   console.log(label);
   const { handleChange } = useContext(FormContext);
  return (
    <div className='group'>
        <label htmlFor="exampleInputEmail1" id={id}>{label}</label>
<input type={type} 
onChange={event => handleChange(id, event)}
// value={state}
// onChange={e=>e.target.value}
 className="form-control" id={id} 
aria-describedby="emailHelp"  required/>

    </div>
  )
}

export default Input