import { Outlet, Navigate } from 'react-router-dom'
import './AuthLayout.scss'
import logoImage from '../assets/loginImage.svg'
import logo from '../assets/lendsqrlogo.svg'

const AuthLayout = () => {
    const isAutheticated = false;

    return (

        <>
            {isAutheticated ? (
                <Navigate to='/' />
            ) : (
                <>
                    <div className='authContainer'>
                        <section className='authframe'>
                            <div>
                                <img
                                    src={logo}
                                    alt="logo"
                                    className='logo'
                                />
                                <img
                                    src={logoImage}
                                    alt="logo"
                                    className=' hidden xl:block w-1/2 h-screen object-cover bg-no-repeat illustration'
                                />
                            </div>

                        </section>
                        <section className='authform'>
                            <Outlet />
                        </section>
                    </div>


                </>
            )}
        </>
    )
}

export default AuthLayout