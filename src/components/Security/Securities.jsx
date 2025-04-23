import { useState } from 'react'
import SecurityList from './SecurityList'
import { FaPlus } from 'react-icons/fa'
import AddUserModal from './AddUserModal'
const Securities = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [addModal, setAddModal] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const handleClose = () => setAddModal(false)
  const handleOpen = () => setAddModal(true)
  return (
    <><div className='filters w-full'>
      <div className="search-bar m-3 mx-5 flex justify-between gap-5">
        <div className='flex items-center bg-primary text-white p-2 px-4 gap-2 text-sm rounded-lg hover:bg-primary/80 cursor-pointer' onClick={handleOpen}>
          <FaPlus />
          <button>  Add Security</button>
        </div>
        <div className='space-x-4 flex items-center'>

          <input type="search" placeholder='Search' className='w-64 p-2 text-sm border-2 border-primary rounded-lg' onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
      </div>
    </div>


      <div className='m-8 '>
        <SecurityList searchQuery={searchQuery} refresh={refresh} setRefresh={setRefresh}/>
        <AddUserModal handleClose={handleClose} addModal={addModal} refresh={refresh} setRefresh={setRefresh} />
      </div>
    </>
  )
}

export default Securities