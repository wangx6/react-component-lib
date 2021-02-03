import React from 'react'
import './styles.module.css'


import VhiButton from './Buttons/Button/Button';
import VhiInput from './inputs/TextInput/TextInput';
import VhiLogin from './Login/Login';
import VhiRegister from './Register/Register';
import VhiVerifyEmail from './VerifyEmail/VerifyEmail';
import VhiForgotPassword from './ForgotPassword/ForgotPassword';

// if you want to see all the components (story book) cd to 
// example folder and run "npm run start"
// export default { VButton } ;
export { 
  VhiButton,
  VhiInput,
  VhiLogin,
  VhiRegister,
  VhiVerifyEmail,
  VhiForgotPassword
}
