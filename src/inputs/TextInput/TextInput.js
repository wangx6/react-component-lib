import React, {useState} from 'react';
import TextInputStyle from './TextInput.css';

const VhiInput = ({ vplaceholder, vvalue, vhandleChange, vtype }) => {
    const [value] = useState(vvalue || '')
    const type = vtype || 'text';
    const handleChange = vhandleChange || (() => {});
    return <input 
    type={type}  
    onChange={handleChange}
    defaultValue={value} 
    className={`${TextInputStyle['vhi-input']}`} 
    placeholder={vplaceholder} />
}
export default VhiInput;