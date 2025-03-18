import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from "./Dashboard"
import Securities from "./Securities"
import Students from "./Students"
import Wardens from "./Wardens";
import NavBar from "./Common/NavBar"
import Header from './Common/Header'

const Dashboard = () => {
  return (
    <>
      <div className='h-[100vh]'>
        {/* <Header /> */}
        <NavBar />
      </div>

      <div>
        <Routes>
          <Route element={<DashBoard />} path='' />
          <Route element={<Securities />} path='security' />
          <Route element={<Students />} path='students' />
          <Route element={<Wardens />} path='wardens' />

        </Routes>
      </div>
    </>
  )
}

export default Dashboard