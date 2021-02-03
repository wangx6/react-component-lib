import React from 'react'
import logoImage from './images/logo.png';

export default function Side() {
    const items = [
        { name: 'buttons', children: [
            {name: 'primary button'},
            {name: 'spinner button'},
        ] },
        { name: 'form inputs', children: [
            { name: 'text input' },
            { name: 'password input' },
            { name: 'checkbox input' },
            { name: 'toggle button' },
            { name: 'textarea' },
        ]},
        { name: 'tabs', children: [
            { name: 'basic tab' },
            { name: 'dynamic tab' },
        ]},
        { name: 'charts', children: [
            { name: 'bar' },
            { name: 'pie' },
        ]},
        { name: 'micro frontend', children: [
            {name: 'facility finder'},
            {name: 'life quote engine'},
            {name: 'mortgage quote engine'},
            {name: 'login'},
            {name: 'register'},
            {name: 'verify email'},
            {name: 'forgot password'},
        ] },
    ];
    return (
        <div className="vrl-side-wrap">
            <div className="vrl-side">
                <div className="vrl-side-logo">
                    <img src={logoImage} alt="vhi react component lib logo"/>
                </div>
                <div className="vrl-side-list">
                    {items.map(i => <div key={i.name} className="vrl-side-item">
                        <div className="vrl-side-item-group">{i.name}</div>
                        <div>{i.children.map(ic => 
                            <div class="vrl-side-item-child" key={i.name + ic.name}>{ic.name}</div>
                        )}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
