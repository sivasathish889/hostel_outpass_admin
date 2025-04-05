import React from 'react'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Common/NavBar'
import Header from './components/Common/Header'
import Securities from './components/Security/Securities'
import Students from './components/Stundents/Students'
import Wardens from './components/Warden/Wardens'
import Passes from './components/Passes/Passes'

const App = () => {
  return (
    <div className='flex h-[100vh]'>
      <div>
        <NavBar />
      </div>
      <div className='w-full'>
        <Header />
        <Routes>
          <Route element={<Dashboard />} path='/' />
          <Route element={<Securities />} path='security' />
          <Route element={<Students />} path='students' />
          <Route element={<Wardens />} path='wardens' />
          <Route element={<Passes />} path='passes' />

        </Routes>
      </div>
    </div>
  )
}

export default App