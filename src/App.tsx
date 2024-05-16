import { Route, Routes } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Users } from './_root/pages'
import './App.scss'

const App = () => {

  return (
    <>
    <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route index element={< SignInForm/>} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route path='/users' element={< Users />} />
        </Route>


      </Routes>
    </>
  )
}

export default App
