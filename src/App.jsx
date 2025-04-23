import React from 'react'
import Main from './layout/Main'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login'
import { useAuth } from './context/AuthProvider'
import ProtectedRoutes from './context/ProtectedRoutes'

const App = () => {
  const { isLogin } = useAuth()
  return (
    <Routes>
      {!isLogin && (
        <>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
      <Route element={<ProtectedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  )
}

export default App