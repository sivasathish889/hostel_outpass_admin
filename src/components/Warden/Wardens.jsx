import React from 'react'
import WardenList from './WardenList'

const Wardens = () => {
  return (
    <>
      <div className='filters w-full'>
        <div className="search-bar m-3 mx-5 flex justify-end gap-5">
          <input type="search" name="" id="" placeholder='Search' className='w-64 p-2 text-sm border-2 border-primary rounded-lg' />          
        </div>
      </div>

      <div className='m-8 '>
        <WardenList/>
      </div>
    </>
  )
}

export default Wardens