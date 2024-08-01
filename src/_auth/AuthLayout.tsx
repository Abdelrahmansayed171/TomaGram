import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const AuthLayout = () => {

  const isAuthenticated = false;

  return (
    <>
      {
        isAuthenticated ?
        (<Navigate to='/' />):
        (
          <>
            <section className='flex flex-1 flex-col justify-center items-center'>
              <Outlet />
            </section>
            <img 
              src='/assets/images/side-img.svg'
              alt='Side Image'
              className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
            />
          </>
        )

      }
    </>
  )
}

export default AuthLayout
