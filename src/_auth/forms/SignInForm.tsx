import { useNavigate } from 'react-router-dom'
import '../AuthLayout.scss'
import Input from '../../components/ui/Input'
import PasswordInput from '../../components/ui/PasswordInput'
import Button from '../../components/ui/Button'

const SignInForm = () => {
const navigate = useNavigate();


  const handleSubmit = () => {
    navigate('/users')
  }

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
        <Button 
        variant="primary"
        onClick={handleSubmit}
        >
          LOG IN</Button>
        </div>
      </div>
    </>
  )
}

export default SignInForm