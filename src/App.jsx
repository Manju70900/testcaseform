import React,{useState,useEffect} from 'react'
import MainForm from './Pages/MainForm'
import Json from "./formElement.json"
import "./App.css"
import {FormContext} from "./FormContext"
console.log(Json);
const App = () => {
  const [val, setVal] = useState(null);
  const [submit,setSubmit]=useState(true)
  useEffect(()=>{
    setVal(Json[0])
    },[])
    const {fields,formHeading} = val??{}
    const handleSubmit = (e)=>{
      console.log('submit')
      e.preventDefault();
      alert("successfully submitted");
      setVal("");
     
      
      }
      
        const handleChange = (id, event) => {
          const newElements = { ...val }
          newElements.fields.forEach(fields => {
          const { type, id, label } = fields
          if (id === id) {
            switch (type) {
              case 'radio':
              fields['value'] = event.target.value;
              break;
              case 'text':
              fields['value'] = event.target.value;
              break;
              case 'number':
              fields['value'] = event.target.value;
              break;
              case 'select':
              fields['value'] = event.target.value;
              break;
              case 'textarea':
              fields['value'] = event.target.value;
              break;
              default:
              fields['value'] = event.target.value;
              break;
          }}
          setVal(newElements)
          });
          }

  return (
    <FormContext.Provider value={{handleChange}}>
    <div className="container">
    <h3>{formHeading}</h3>
    <form onSubmit={handleSubmit} noValidate="true" >
    {fields?fields.map((fields, i) => <><MainForm key={i} fields={fields}  /><p></p></>):null}
          <button className="btn ">{ val !== null ? "submit" : "submitted"}</button>
    </form>
    </div>
    </FormContext.Provider>
  )
}

export default App