import React, {useContext} from 'react'
import logoImage from './images/logo.png';
import {configContext} from './ContextApi';


export default function Side({handleClickItem}) {
    const cc = useContext(configContext);

    const onClickItem = (name) => {
        if(handleClickItem) handleClickItem(name);
    };
    const items = cc;
    return (
        <div className="vrl-side-wrap">
            <div className="vrl-side">
                <div className="vrl-side-logo">
                    <img src={logoImage} alt="vhi react component lib logo"/>
                </div>
                <div className="vrl-side-list">
                    <div className="vrl-side-item">
                        <div className="vrl-side-item-name" onClick={e => onClickItem('all')}>All</div>
                    </div>
                    {items.map(i => <div onClick={e => onClickItem(i.name)} key={i.name} className="vrl-side-item">
                        <div className="vrl-side-item-name">{i.name}</div>
                        <div className={`vrl-side-item-tag ${i.type}`}>{i.group}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
