import { Route, Routes } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import AuthLayout from './_auth/AuthLayout'
import './App.scss'

const App = () => {

  return (
    <>
    <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={< SignInForm/>} />
        </Route>

        {/* private routes */}
        {/* <Route element={<RootLayout />}>
          <Route index element={< Home />} />
        </Route> */}


      </Routes>
    </>
  )
}

export default App
