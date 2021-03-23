import React, { useState, useEffect } from 'react'
import VhiButton from '../Buttons/Button/Button'
import VhiInput from '../inputs/TextInput/TextInput'
import RegisterStyle from './Register.css'

export default function VhiRegister({
  vhandleRegister,
  vemail,
  vpassword,
  vconfirmPassword,
  verror
}) {
  const [email, setEmail] = useState(vemail)
  const [password, setPassword] = useState(vpassword)
  const [confirmPassword, setConfirmPassword] = useState(vconfirmPassword)
  const [error, setError] = useState(verror || {})
  const handleRegister = vhandleRegister || (() => {})

  useEffect(() => {
    setError(
      verror || {
        email: 'Please enter the correct email',
        password: 'Please enter the correct password',
        confirmPassword: 'Password not matching'
      }
    )
  }, [verror])

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div className={RegisterStyle['vhi-register']}>
      <VhiInput
        vvalue={email}
        vplaceholder='Email'
        vhandleChange={onEmailChange}
      />
      <div className={RegisterStyle['vhi-register-err']}>{error.email}</div>
      <VhiInput
        vvalue={password}
        vplaceholder='Password'
        vhandleChange={onPasswordChange}
      />
      <div className={RegisterStyle['vhi-register-err']}>{error.password}</div>
      <VhiInput
        vvalue={confirmPassword}
        vplaceholder='Confirm password'
        vhandleChange={onConfirmPasswordChange}
      />
      <div className={RegisterStyle['vhi-register-err']}>
        {error.confirmPassword}
      </div>
      <VhiButton
        vclassName={RegisterStyle['vhi-register-subbtn']}
        vtext='Create a new account'
        vhandleClick={() => {
          handleRegister({ email, password, confirmPassword })
        }}
      />
    </div>
  )
}
