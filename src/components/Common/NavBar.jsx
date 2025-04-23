import { useState } from 'react'
import { FaChartSimple } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import logo from "../../../assets/icon.png"

import { Link, useLocation } from "react-router-dom"
import { useAuth } from '../../context/AuthProvider';
const NavBar = () => {
  const loc = useLocation().pathname
  const [select, setSelect] = useState(`${loc}`)
  const {  logout } = useAuth()
  return (
    <div className='w-52 rounded-sm bg-primary h-full text-white '>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="logo" width={100} height={100} className='mt-4 max-w-28 min-w-3 w-full' />
      </div>

      <div className="list_items flex flex-col gap-7 items-center mt-10">
        <Link to={"/"} className={`flex items-center w-full py-2 gap-3 ps-4 cursor-pointer  ${select == "/" ? "bg-white text-primary border-slate-700 border-r-4 " : ""}`} onClick={() => setSelect("/")}>
          <FaChartSimple />
          Dashboard
        </Link>
        <Link to={"/students"} className={`${select == "/students" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex  w-full items-center ps-4  py-2  gap-3 cursor-pointer`} onClick={() => setSelect("/students")}>
          <PiStudentBold />
          Students
        </Link>
        <Link to={"/wardens"} className={`${select == "/wardens" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex items-center w-full  py-2 ps-4  gap-3 cursor-pointer`} onClick={() => setSelect("/wardens")}>
          <GiSecurityGate />
          Wardens
        </Link>
        <Link to={"/security"} className={`${select == "/security" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex items-center  w-full  py-2 ps-4  gap-3 cursor-pointer`} onClick={() => setSelect("/security")}>
          <MdOutlineSecurity />
          Security
        </Link>
        <Link to={"/passes"} className={`${select == "/passes" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex items-center w-full  py-2 ps-4  gap-3 cursor-pointer`} onClick={() => setSelect("/passes")}>
          <RiPagesFill />
          Passes
        </Link>
      </div>

      <div className="logout absolute bottom-10 px-6 " onClick={()=>logout()}>
        <h4 className='text-end flex justify-center items-center gap-2 rounded-md px-12 py-1 bg-red-700 hover:bg-red-600 hover:px-12 hover:py-1 cursor-pointer'>Log Out <IoLogOut /></h4>
      </div>
    </div>
  )
}

export default NavBar