import React from 'react'
import Dashboard from './components/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/Common/NavBar'
import Header from './components/Common/Header'
import Securities from './components/Security/Securities'
import Students from './components/Stundents/Students'
import Wardens from './components/Warden/Wardens'
import Passes from './components/Passes/Passes'
import PassDetails from './components/Passes/PassDetails'
import Login from './components/Auth/Login'
import { useAuth } from './context/AuthProvider'
import ProtectedRoutes from './context/ProtectedRoutes'

const App = () => {
  const { isLogin } = useAuth()
  console.log(isLogin)
  return (
    <Routes>
      {!isLogin && (
        <>
          <Route element={<Login />} path='login' />
          <Route element={<Navigate to={'login'} />} path='*' />
        </>

      )}
      <div className='flex h-[100vh]'>
        <div className='h-full'>
          <NavBar />
        </div>
        <div className='w-full'>
          <Header />
          <Route element={<ProtectedRoutes />}>
            <Route element={<Dashboard />} path='/' />
            <Route element={<Securities />} path='/security' />
            <Route element={<Students />} path='students' />
            <Route element={<Wardens />} path='wardens' />
            <Route element={<Passes />} path='passes' />
            <Route element={<PassDetails />} path='passes/:passId' />
          </Route>
        </div>
      </div>
    </Routes>
  )
}

export default App