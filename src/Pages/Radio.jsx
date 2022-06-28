import React,{useContext} from 'react'
import {FormContext} from "../FormContext"
const Radio = ({id,label,options,type}) => {
    const { handleChange } = useContext(FormContext);
  return (
    <div>
        <label className="form-check-label" htmlFor="gender">{label}</label>
       
       {options.length > 0 && options.map((option, i) =>
      
        <>
    <input type="radio" className="form-check-input" value={option.label} id={id} onChange={(event) => handleChange(id, event)} name={id} required />
        
       <label key={i}>{option.label} </label>
       </>)}



    </div>

  )
}

export default Radio