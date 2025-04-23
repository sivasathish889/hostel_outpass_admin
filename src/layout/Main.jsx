import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Securities from '../components/Security/Securities'
import Students from '../components/Stundents/Students'
import Wardens from '../components/Warden/Wardens'
import Passes from '../components/Passes/Passes'
import PassDetails from '../components/Passes/PassDetails'
import NavBar from '../components/Common/NavBar'
import Header from '../components/Common/Header'

const Main = () => {
    return (
        <div className='flex h-[100vh]'>
            <div className='h-full'>
                <NavBar />
            </div>
            <div className='w-full'>
                <Header />
                <Routes>
                    <Route element={<Dashboard />} path='/' />
                    <Route element={<Securities />} path='/security' />
                    <Route element={<Students />} path='/students' />
                    <Route element={<Wardens />} path='/wardens' />
                    <Route element={<Passes />} path='/passes' />
                    <Route element={<PassDetails />} path='/passes/:passId' />
                </Routes>
            </div>
        </div>
    )
}

export default Main