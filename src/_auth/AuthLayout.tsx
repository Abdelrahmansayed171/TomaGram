import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <h1>I'm The Layout</h1>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
