import React from 'react';
import vhiBtnStyle from './button.css';
const VhiButton = ({ text }) => {
    return <button className={vhiBtnStyle['vhi-btn']}>{text}</button>
}
export default VhiButton;