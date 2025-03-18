import React, { useState } from 'react'
import { FaChartSimple } from "react-icons/fa6";

const NavBar = () => {
  const [select, setSelect] = useState('dashboard')
  return (
    <div className='w-52 rounded-sm bg-primary h-full text-white '>
      <div>
        <h2>Logo</h2>
      </div>

      <div className="list_items flex flex-col gap-7 items-center mt-20">
        <h4 className={`${select == "dashboard" ? "bg-primary text-white" : ""} flex items-center px-10 py-2 rounded-md gap-3 cursor-pointer`} onClick={()=>setSelect("dashboard")}>
          <FaChartSimple />
          DashBoard
        </h4>
        <h4>Students</h4>
        <h4>Security</h4>
        <h4>Warden</h4>
      </div>

      <div className="logout absolute bottom-10 px-6 ">
        <h4 className='text-end  rounded-md px-12 py-1 bg-red-700 hover:bg-red-600 hover:px-12 hover:py-1 cursor-pointer'>Log Out</h4>
      </div>
    </div>
  )
}

export default NavBar