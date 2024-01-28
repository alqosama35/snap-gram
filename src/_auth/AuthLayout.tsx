"use client"
import {Outlet, Navigate} from 'react-router-dom'
import SignupForm from './forms/SignupForm'

 const isAuthenticated = false;
const AuthLayout = () => {
  return (
    <>
      {isAuthenticated?(
        <Navigate to="/" />
      ):(
          <>
            <section className='flex flex-1 justify-center items-center flex-col'>
              <Outlet />
            </section>
            <img src='/assets/images/side-img.svg'  alt='side-img'
            className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
            />
          </>
      )}
    </>
    
  )
}

export default AuthLayout