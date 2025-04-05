import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [dropDown, setDropDown] = useState(false)
  return (
    <div className='flex-1 w-full'>
      <div className="icon flex justify-between items-center bg-[#D6D6D6]  h-24">
        <div className="admin_name">
          Shiva
        </div>
        <div className="role rounded-full">
          <div className={`text-left flex mr-5 justify-center items-center select-none`} unselectable='on'>
            <img src="https://placehold.co/400x400/orange/white" alt="" height={50} width={50} className='rounded-full max-w-6xl min-w-12' />
            <div className='mx-3'>
              <div className=''>
                Siva
              </div>
              <div className='flex text-xs'>
                adminstrator
                <IoMdArrowDropdown className=" size-5 text-gray-400 " onClick={() => setDropDown(!dropDown)} />
              </div>
            </div>

            <div
              className="absolute right-5 z-10 mt-52 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5  "
            >
              <div className={`py-1 ${dropDown ? "" : "hidden"}`}>
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700  "
                  >
                    Account settings
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700  "
                  >
                    Support
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700  "
                  >
                    License
                  </a>
                </div>
                <form action="#" method="POST">
                  <div>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700  "
                    >
                      Sign out
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header