import './styles.module.css'

// step 1: Create your component
// step 2: Include it in the index.js file like below
// step 3: Build (ctrl + s)
// step 4: cd into example
// step 5: Update the app.js in the example folder by adding the new component to the component doc black

// step 6: Commit your change
// step 7: Publish your library with new version defined in your package.json
// step 8: Deploy your gh-page with "npm deploy"

import VhiButton from './Buttons/Button/Button'
import VhiInput from './inputs/TextInput/TextInput'
import VhiLogin from './Login/Login'
import VhiRegister from './Register/Register'
import VhiVerifyEmail from './VerifyEmail/VerifyEmail'
import VhiForgotPassword from './ForgotPassword/ForgotPassword'
import VhiResetPassword from './ResetPassword/ResetPassword'

// if you want to see all the components (story book) cd to
// example folder and run "npm run start"
// export default { VButton } ;

export {
  VhiButton,
  VhiInput,
  VhiLogin,
  VhiRegister,
  VhiVerifyEmail,
  VhiForgotPassword,
  VhiResetPassword
}
