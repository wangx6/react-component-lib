import React from 'react'

import { VhiButton, VhiInput } from 'vhi-react-lib'
import 'vhi-react-lib/dist/index.css'

const App = () => {
  return (
    <div>
      <div>
        <VhiButton text="Vhi react component lib 😄"></VhiButton>
      </div>
      <div>
        <VhiInput placeholder="Email"></VhiInput>
      </div>
    </div>)
}

export default App
