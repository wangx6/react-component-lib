import React from 'react';
import TextInputStyle from './TextInput.css';

const VhiInput = ({ placeholder }) => {
    return <input className={TextInputStyle['vhi-input']} placeholder={placeholder} />
}
export default VhiInput;