import React from 'react'
import StudentList from './StudentList'

const Students = () => {
  return (
    <>
      <div className='filters w-full'>
        <div className="search-bar m-3 mx-5 flex justify-end gap-5">
            <input type="search" name="" id="" placeholder='Search' className='w-80 p-2 border-2 border-primary rounded-lg' />
            <select name="year" id="" className='p-2 px-4 border-2 border-primary rounded-lg'>
              <option value="">--Select Year-- </option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
            </select>
        </div>
      </div>  

      <div>
        <StudentList />
      </div>
    </>
  )
}

export default Students