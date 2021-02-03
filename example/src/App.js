import React, {useState} from 'react'

import Space from './Space';
import Side from './Side';
import { 
  VhiButton, 
  VhiInput, 
  VhiLogin, 
  VhiRegister,
  VhiVerifyEmail,
  VhiForgotPassword,
} from 'vhi-react-lib'
import 'vhi-react-lib/dist/index.css'

import CompDoc from './CompDoc';

const App = () => {
  return (
    <div>
      <Side></Side>
      <div className="vrl-main">
      <div>
        <h1>Vhi React Component Library</h1>
      </div>
      <CompDoc 
        name="Primary Button"
        docData={{
          a11y: 'yes',
          data: [
            {
              'property': 'text',
              'dataType': 'string',
              'required': 'true',
              'default': '""',
              'description': 'Text displayed on the button.',
            },
            {
              'property': 'testId',
              'dataType': 'string',
              'required': 'false',
              'default': '""',
              'description': 'test-id used for QA to reference dom element.',
            },
            {
              'property': 'status',
              'dataType': 'string',
              'required': 'false',
              'default': 'active',
              'description': 'Text displayed on the button. options: "active", "inactive"',
            },
            {
              'property': 'handleClick',
              'dataType': 'function',
              'required': 'false',
              'default': 'null',
              'description': 'Handling the click event.',
            }
          ]
        }}
        component={
          <div>
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

            
          </div>
        }>
      </CompDoc>



      <CompDoc 
        name="Text Input"
        docData={{
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
        }}
        component={<VhiInput 
          vplaceholder="Vhi Text Input"
          vhandleChange={()=>{console.log('Change detected');}}
        ></VhiInput>}>
      </CompDoc>


      <CompDoc 
        name="Login"
        docData={{
          a11y: 'yes',
          data: [
            {
              'property': 'placeholder',
              'dataType': 'string',
              'required': 'false',
              'default': '""',
              'description': 'Text displayed on the button.',
            },
            {
              'property': 'handleClick',
              'dataType': 'function',
              'required': 'false',
              'default': 'null',
              'description': 'Handling the click event.',
            }
          ]
        }}
        component={<VhiLogin></VhiLogin>}>
      </CompDoc>


      <CompDoc 
        name="Register / Create a new account"
        docData={{
          a11y: 'yes',
          data: [
            {
              'property': 'placeholder',
              'dataType': 'string',
              'required': 'false',
              'default': '""',
              'description': 'Text displayed on the button.',
            },
            {
              'property': 'handleClick',
              'dataType': 'function',
              'required': 'false',
              'default': 'null',
              'description': 'Handling the click event.',
            }
          ]
        }}
        component={<VhiRegister 
        vemail="someone@vhi.ie" 
        vpassword="xxxxxxxx"
        vconfirmPassword="cxxxxxx"
        vhandleRegister={(data) => console.log(data)}></VhiRegister>}>
      </CompDoc>


      <CompDoc 
        name="Forgot Password"
        docData={{
          a11y: 'yes',
          data: [
            {
              'property': 'placeholder',
              'dataType': 'string',
              'required': 'false',
              'default': '""',
              'description': 'Text displayed on the button.',
            },
            {
              'property': 'handleClick',
              'dataType': 'function',
              'required': 'false',
              'default': 'null',
              'description': 'Handling the click event.',
            }
          ]
        }}
        component={<VhiForgotPassword></VhiForgotPassword>}>
      </CompDoc>


      <CompDoc 
        name="Verify Email"
        docData={{
          a11y: 'yes',
          data: [
            {
              'property': 'accessToken',
              'dataType': 'string',
              'required': 'true',
              'default': '""',
              'description': 'required for authorization.',
            },
            {
              'property': 'verificationToken',
              'dataType': 'string',
              'required': 'true',
              'default': '',
              'description': 'required for authentication.',
            },
            {
              'property': 'authenEndpoint',
              'dataType': 'string',
              'required': 'true',
              'default': '',
              'description': 'authentication endpoint.',
            }
          ]
        }}
        component={<VhiVerifyEmail></VhiVerifyEmail>}>
      </CompDoc>
      </div>
     


      
    </div>)
}

export default App
