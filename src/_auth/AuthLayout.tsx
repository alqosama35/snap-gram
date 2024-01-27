import React from 'react'
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
            <section>
              <Outlet />
            </section>
          </>
      )}
    </>
    
  )
}

export default AuthLayout