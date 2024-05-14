import '../AuthLayout.scss'
import Input from '../../components/ui/Input'
import PasswordInput from '../../components/ui/PasswordInput'
import Button from '../../components/ui/Button'

const SignInForm = () => {

  return (
    <>
      <div className='signin-container'>
        <div className='signin-header'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        <div className='signin-body'>
          <Input type='text' placeholder='Email' />
          <PasswordInput  placeholder='Password' />
          <p>FORGOT PASSWORD?</p>
        </div>
        <div className='signin-footer'>
        <Button variant="primary">LOG IN</Button>
        </div>
      </div>
    </>
  )
}

export default SignInForm