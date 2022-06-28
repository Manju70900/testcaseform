import React from 'react'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'

const MainForm = ({fields:{id,label,type,options}}) => {
    
  
    switch (type) {
        case 'text':
        return (
        <Input
        id={id}
        label={label}
        
        />);
        case 'number':
        return (
        <Input
        id={id}
        label={label}
        
        />);
        case 'select':
        return (
        <Select id={id}
        label={label}
        
        options={options} />
        );
        case 'radio':
        return (<Radio 
            id={id}
            label={label}
           options={options}/>);
           case 'textarea':
        return (
        <Input
        id={id}
        label={label}
        
        />);
        default:
        return null;
        }
}

export default MainForm