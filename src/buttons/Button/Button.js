import React, { useState, useEffect } from 'react';
import vhiBtnStyle from './button.css';

console.log(vhiBtnStyle);

const VhiButton = ({ vtext, vhandleClick, vdisabled, vclassName, vshowSpinner}) => {
    const [clsName] = useState(vclassName || '');
    const [showSpinner, setShowSpinner] = useState(vshowSpinner);
    const clickFn = vhandleClick || (() => {});

    useEffect(() => {
        setShowSpinner(vshowSpinner);
    }, [vshowSpinner]);

    return <div className={vhiBtnStyle['vhi-btn-wrap']}>
        <button 
        className={`${vhiBtnStyle['vhi-btn']} ${clsName} ${showSpinner ? 'spin' : ''}`} 
        disabled={vdisabled} 
        onClick={(evt) => {!showSpinner && clickFn(evt)}}>{showSpinner ? '' : vtext}</button>
        {showSpinner ? <div className={vhiBtnStyle['vhi-btn-spinner']}></div> : null}
    </div>

}
export default VhiButton;