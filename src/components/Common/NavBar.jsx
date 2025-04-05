import React, { useState } from 'react'
import { FaChartSimple } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom"
const NavBar = () => {
  const [select, setSelect] = useState('dashboard')
  console.log(select);

  return (
    <div className='w-52 rounded-sm bg-primary h-full text-white '>
      <div className=''>
        <h2>Logo</h2>
      </div>

      <div className="list_items flex flex-col gap-7 items-center mt-28">
        <Link to={"/"} className={`flex items-center w-full py-2 gap-3 ps-4 cursor-pointer  ${select == "dashboard" ? "bg-white text-primary border-slate-700 border-r-4 " : ""}`} onClick={() => setSelect("dashboard")}>
          <FaChartSimple />
          Dashboard
        </Link>
        <Link to={"students"} className={`${select == "Students" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex  w-full items-center ps-4  py-2  gap-3 cursor-pointer`} onClick={() => setSelect("Students")}>
          <PiStudentBold />
          Students
        </Link>
        <Link to={"wardens"} className={`${select == "Wardens" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex items-center w-full  py-2 ps-4  gap-3 cursor-pointer`} onClick={() => setSelect("Wardens")}>
          <GiSecurityGate />
          Wardens
        </Link>
        <Link to={"security"} className={`${select == "Security" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex items-center  w-full  py-2 ps-4  gap-3 cursor-pointer`} onClick={() => setSelect("Security")}>
          <MdOutlineSecurity />
          Security
        </Link>
        <Link to={"passes"} className={`${select == "Passes" ? "bg-white text-primary border-slate-700 border-r-4 " : ""} flex items-center w-full  py-2 ps-4  gap-3 cursor-pointer`} onClick={() => setSelect("Passes")}>
          <FaChartSimple />
          Passes
        </Link>
      </div>

      <div className="logout absolute bottom-10 px-6 ">
        <h4 className='text-end flex justify-center items-center gap-2 rounded-md px-12 py-1 bg-red-700 hover:bg-red-600 hover:px-12 hover:py-1 cursor-pointer'>Log Out <IoLogOut /></h4>
      </div>
    </div>
  )
}

export default NavBar