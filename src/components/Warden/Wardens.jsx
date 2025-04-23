import { useState } from 'react'
import WardenList from './WardenList'
import { FaPlus } from "react-icons/fa";
import AddUserModal from './AddUserModal';

const Wardens = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [genderQuery, setGenderQuery] = useState('')
  const [addModal, setAddModal] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const handleClose = () => setAddModal(false)
  const handleOpen = () => setAddModal(true)
  return (
    <>
      <div className='filters w-full'>
        <div className="search-bar m-3 mx-5 flex justify-between gap-5">
          <div className='flex items-center bg-primary text-white p-2 px-4 gap-2 text-sm rounded-lg hover:bg-primary/80 cursor-pointer' onClick={handleOpen}>
            <FaPlus />
            <button>  Add Warden</button>
          </div>
          <div className='space-x-4 flex items-center'>
            <select name="gender" id="" className='p-2 px-4 border-2 border-primary rounded-lg h-10' onChange={(e) => setGenderQuery(e.target.value)}>
              <option value="">--Select Gender-- </option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="search" name="" id="" placeholder='Search' className='w-64 p-2 text-sm border-2 border-primary rounded-lg' onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
      </div>

      <div className='m-8 '>
        <WardenList searchQuery={searchQuery} genderQuery={genderQuery} refresh={refresh} setRefresh={setRefresh} />
        <AddUserModal handleClose={handleClose} addModal={addModal} refresh={refresh} setRefresh={setRefresh} />
      </div>
    </>
  )
}

export default Wardens