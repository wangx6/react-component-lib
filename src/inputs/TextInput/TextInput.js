import React, { useState } from 'react'
import TextInputStyle from './TextInput.css'

const VhiInput = ({ vplaceholder, vvalue, vhandleChange, vtype, verror }) => {
  const [value] = useState(vvalue || '')
  const [error] = useState(verror || '')
  const type = vtype || 'text'
  const handleChange = vhandleChange || (() => {})

  return (
    <div>
      <input
        type={type}
        onChange={handleChange}
        defaultValue={value}
        className={`${TextInputStyle['vhi-input']}`}
        placeholder={vplaceholder}
      />
      <div className='vhi-input-error'>{error}</div>
    </div>
  )
}
export default VhiInput
