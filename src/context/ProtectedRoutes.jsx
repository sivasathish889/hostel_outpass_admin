import React from 'react'
import { useAuth } from './AuthProvider'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {isLogin} = useAuth()
    const navigate = useNavigate()
  return (
    isLogin ? <Outlet/> : navigate('/login')
  )
}

export default ProtectedRoutes