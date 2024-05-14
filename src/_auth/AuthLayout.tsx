import { Outlet, Navigate } from 'react-router-dom'
import './AuthLayout.scss'
import logoImage from '../assets/loginImage.svg'
import logo from '../assets/lendsqrlogo.svg'
import logoMob from '../assets/logoMob.svg'

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
                                    className='illustration'
                                />
                            </div>

                        </section>
                        <section className='authform'>
                            <img
                                src={logoMob}
                                alt="logo"
                            />
                            <Outlet />
                        </section>
                    </div>


                </>
            )}
        </>
    )
}

export default AuthLayout