import React,{useContext} from 'react'
import { FormContext } from '../FormContext'

const Select = ({id,label,options}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div form="group" id={id}>
        <label htmlFor="exampleInputPassword1" id={id}>{label}</label>
<select className="form-control" onChange={event => handleChange(id, event)} required>
<option>select</option>
{options.length > 0 && options.map((option, i) => <option key={i} 
value={option.label}>{option.label} </option>)}
</select>
    </div>
  )
}

export default Select