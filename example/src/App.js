import React, {useState} from 'react'

import Space from './Space';
import Side from './Side';
import { version } from '../package.json';

import {configContext} from './ContextApi';
import CompDoc from './CompDoc';
import 'vhi-react-lib/dist/index.css'

import { 
    VhiButton, 
    VhiInput, 
    VhiLogin, 
    VhiRegister,
    VhiVerifyEmail,
    VhiForgotPassword,
    VhiResetPassword,
} from 'vhi-react-lib'



const iState = [
    { 
        group: 'buttons',
        type: 'button',
        name: 'VhiButton', 
        visible: true,
        component: <div>
        <VhiButton 
            vtext="Vhi Button" 
            vclsName='customized-cls'
            vhandleClick={e => alert('Welcome to Vhi RCL')}
            vdisabled={false}
        ></VhiButton>

        <Space></Space>

        <VhiButton 
            vtext="Vhi Button With Spinner" 
            vclsName='customized-cls'
            vshowSpinner={true}
            vhandleClick={e => alert('when loading, click will not work')}
            vdisabled={false}
        ></VhiButton>

        <Space></Space>

        <VhiButton 
            vtext="Vhi Button" 
            vclsName='customized-cls'
            vdisabled={true}
        ></VhiButton>

        
        </div>,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vtext',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '""',
                    'description': 'Text displayed on the button.',
                },
                {
                    'property': 'vtestId',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'test-id used for QA to reference dom element.',
                },
                {
                    'property': 'vstatus',
                    'dataType': 'string',
                    'required': 'false',
                    'default': 'active',
                    'description': 'Text displayed on the button. options: "active", "inactive"',
                },
                {
                    'property': 'vhandleClick',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Handling the click event.',
                }
            ]
        }
    },
    { 
        group: 'form inputs', 
        type: 'input',
        name: 'VhiTextInput', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Placeholder displayed.',
                },
                {
                    'property': 'vvalue',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed.',
                },
                {
                    'property': 'vtype',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Type of the input.',
                },
                {
                    'property': 'vhandleChange',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Handling the click event.',
                }
            ]
        },
        component: <VhiInput 
            vplaceholder="Vhi Text Input"
            vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>
    },
    { 
        group: 'form input', 
        type: 'input',
        name: 'VhiCheckbox', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Placeholder displayed.',
                },
                {
                    'property': 'vvalue',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed.',
                },
            ]
        },
        component: <VhiInput 
            vplaceholder="Vhi Text Input"
            vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>
    },
    { 
        group: 'form input', 
        type: 'input',
        name: 'VhiDropdown', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Placeholder displayed.',
                },
                {
                    'property': 'vvalue',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed.',
                },
            ]
        },
        component: <VhiInput 
            vplaceholder="Vhi Text Input"
            vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>
    },
    { 
        group: 'form input', 
        type: 'input',
        name: 'VhiDatePicker', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Placeholder displayed.',
                },
                {
                    'property': 'vvalue',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed.',
                },
            ]
        },
        component: <VhiInput 
            vplaceholder="Vhi Text Input"
            vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>
    },
    { 
        group: 'form input', 
        type: 'input',
        name: 'VhiRange', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Placeholder displayed.',
                },
                {
                    'property': 'vvalue',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed.',
                },
            ]
        },
        component: <VhiInput 
            vplaceholder="Vhi Text Input"
            vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>
    },
    { 
        group: 'form input', 
        type: 'input',
        name: 'VhiToggler', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Placeholder displayed.',
                },
                {
                    'property': 'vvalue',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed.',
                },
            ]
        },
        component: <VhiInput 
            vplaceholder="Vhi Text Input"
            vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>
    },
    { 
        group: 'micro frontend', 
        type: 'mf',
        name: 'VhiLogin', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed on the button.',
                },
                {
                    'property': 'vhandleClick',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Handling the click event.',
                }
            ]
        },
        component: <VhiLogin></VhiLogin>
    },
    { 
        group: 'micro frontend', 
        type: 'mf',
        name: 'VhiRegister', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed on the button.',
                },
                {
                    'property': 'vhandleClick',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Handling the click event.',
                }
            ]
        },
        component: <VhiRegister 
        vemail="someone@vhi.ie" 
        vpassword="xxxxxxxx"
        vconfirmPassword="cxxxxxx"
        vhandleRegister={(data) => console.log(data)}>
        </VhiRegister>,
    },
    { 
        group: 'micro frontend', 
        type: 'mf',
        name: 'VhiForgotPassword', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed on the button.',
                },
                {
                    'property': 'vhandleClick',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Handling the click event.',
                }
            ]
        },
        component: <VhiForgotPassword></VhiForgotPassword>,
    },
    { 
        group: 'micro frontend',
        type: 'mf',
        name: 'VhiResetPassword', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vplaceholder',
                    'dataType': 'string',
                    'required': 'false',
                    'default': '""',
                    'description': 'Text displayed on the button.',
                },
                {
                    'property': 'vhandleClick',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Handling the click event.',
                }
            ]
        },
        component: <VhiResetPassword></VhiResetPassword>,
    },
    { 
        group: 'micro frontend',
        type: 'mf',
        name: 'VhiVerifyEmail', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vaccessToken',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '""',
                    'description': 'required for authorization.',
                },
                {
                    'property': 'vverificationToken',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '',
                    'description': 'required for authentication.',
                },
                {
                    'property': 'vauthenticationEndpoint',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '',
                    'description': 'authentication endpoint.',
                },
                {
                    'property': 'vonFailed',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Action taken when verification failed.',
                },
                {
                    'property': 'vonSuccessful',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Action taken when verification succeed.',
                },
                {
                    'property': 'vonInProgress',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Action taken when verification is in progress.',
                },
            ]
        },
        component: <VhiVerifyEmail 
            vauthenticationEndpoint="authentication endpoint" 
            vaccessToken="access token" 
            vverificationToken="verification token" >
        </VhiVerifyEmail>,
    },
    { 
        group: 'micro frontend',
        type: 'mf',
        name: 'VhiBilling', 
        visible: true,
        docData: {
            a11y: 'yes',
            data: [
                {
                    'property': 'vaccessToken',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '""',
                    'description': 'required for authorization.',
                },
                {
                    'property': 'vverificationToken',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '',
                    'description': 'required for authentication.',
                },
                {
                    'property': 'vauthenticationEndpoint',
                    'dataType': 'string',
                    'required': 'true',
                    'default': '',
                    'description': 'authentication endpoint.',
                },
                {
                    'property': 'vonFailed',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Action taken when verification failed.',
                },
                {
                    'property': 'vonSuccessful',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Action taken when verification succeed.',
                },
                {
                    'property': 'vonInProgress',
                    'dataType': 'function',
                    'required': 'false',
                    'default': 'null',
                    'description': 'Action taken when verification is in progress.',
                },
            ]
        },
        component: <VhiVerifyEmail 
            vauthenticationEndpoint="authentication endpoint" 
            vaccessToken="access token" 
            vverificationToken="verification token" >
        </VhiVerifyEmail>,
    },
    { 
        group: 'micro frontend',
        type: 'mf',
        name: 'VhiFacilityFinder', 
        visible: true,
        docData: {
        a11y: 'yes',
        data: [
            {
                'property': 'vaccessToken',
                'dataType': 'string',
                'required': 'true',
                'default': '""',
                'description': 'required for authorization.',
            },
            {
                'property': 'vverificationToken',
                'dataType': 'string',
                'required': 'true',
                'default': '',
                'description': 'required for authentication.',
            },
            {
                'property': 'vauthenticationEndpoint',
                'dataType': 'string',
                'required': 'true',
                'default': '',
                'description': 'authentication endpoint.',
            },
            {
                'property': 'vonFailed',
                'dataType': 'function',
                'required': 'false',
                'default': 'null',
                'description': 'Action taken when verification failed.',
            },
            {
                'property': 'vonSuccessful',
                'dataType': 'function',
                'required': 'false',
                'default': 'null',
                'description': 'Action taken when verification succeed.',
            },
            {
                'property': 'vonInProgress',
                'dataType': 'function',
                'required': 'false',
                'default': 'null',
                'description': 'Action taken when verification is in progress.',
            }
        ]
        },
        component: <VhiVerifyEmail 
            vauthenticationEndpoint="authentication endpoint" 
            vaccessToken="access token" 
            vverificationToken="verification token" >
        </VhiVerifyEmail>,
    },
];

const App = () => {


    const [state, setState] = useState(iState);

    const onclicksideitem = (itemName) => {
        setState(state.map(s => {
            s.visible = itemName === 'all' ? true : s.name === itemName;
            return s; 
        }));
    }

  return (
    <div className="vrl-main">
        <configContext.Provider value={state}>
            <Side handleClickItem={onclicksideitem}></Side>
        </configContext.Provider>
        <div className="vrl-main-right">
            <div className="vrl-main-heading">
                <h1>Vhi React Component Library</h1> <span className="vrl-main-version">{version}</span>
            </div>
            {state.map(s => {
                return s.visible ? <CompDoc 
                key={s.name}
                name={s.name}
                docData={s.docData}
                component={s.component}>
                </CompDoc> : null;
            })}

        </div>
    </div>
    )
}

export default App
