import '../AuthLayout.scss'
import Input from '../../components/ui/input'

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
        </div>
      </div>
    </>
  )
}

export default SignInForm