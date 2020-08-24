import React from 'react'



function InputField(props){
    return(
        <input type={props.type} value={props.value} onChange={props.handleChange} name={props.name} required placeholder={props.placeholder} />
    )
}

export default InputField;