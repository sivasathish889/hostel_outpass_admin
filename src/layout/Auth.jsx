import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'

const Auth = () => {
  return (
    <Routes>
    <Route element={<Login />} path='login' />
    <Route element={<Navigate to={'login'} />} path='*' />
  </Routes>
  )
}

export default Auth