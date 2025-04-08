import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditModal from './EditModal';
import axios from 'axios';
import Loader from '../Common/Loader';
import { toast } from 'react-toastify';

const StudentList = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true)
  const [data, setData] = useState([])
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const fetchData = async () => {
    try {
      await axios.get("/getStudentList").then((data) => {
        setIsVisible()
        setData(data.data.users)
        setIsVisible(false)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col h-[60vh]">
      <div className="overflow-x-auto">
        {isVisible ? <Loader visible={isVisible} /> :

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-50 ">
                  <tr className=''>
                    {['No', "Register Number", "Name", "E-mail", "Phone No", "Year", "Department", "District", "Action"].map((el, index) => {
                      return <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        {el}
                      </th>
                    })}

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-center">
                  {data.map((items, index) => {
                    return <tr key={index}>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {items.RegisterNumber}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {items.name}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {items.Email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">

                        {items.PhoneNumber}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {items.year}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {items.Department}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {items.District}
                      </td>
                      <td className='flex justify-center items-center gap-3 px-4 py-4'>
                        <FaEdit color='green' size={18} className='cursor-pointer' onClick={handleEditOpen} />
                        <MdDelete color='red' size={18} className='cursor-pointer' />
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
      <EditModal handleEditClose={handleEditClose} editOpen={editOpen} setEditOpen={setEditOpen} />
    </div>
  )
}

export default StudentList