import React from 'react'
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const StudentList = () => {

  const data = [
    {
      "registerNumber": 422423104302,
      "name": "Shiva",
      "eMail": "sathishsathish96489@gmail.com",
      "roomNo": "FF07",
      "year": "II",
      "department": "CSE"
    },
    {
      "registerNumber": 422423104303,
      "name": "sathish",
      "eMail": "siva@gmail.com",
      "roomNo": "FF07",
      "year": "II",
      "department": "CSE"
    }
  ]
  return (
    <div className="flex flex-col h-[70vh]">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-50 ">
                <tr className=''>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase "
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200"
                  >
                    Register Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200 "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200 "
                  >
                    E-mail
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200 "
                  >
                    Room No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200 "
                  >
                    Year
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200 "
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-bold text-center text-gray-500 uppercase border  border-e-gray-200 "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {data.map((items, index) => {
                  return <tr>
                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                      {items.registerNumber}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                      {items.name}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                      {items.registerNumber}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">

                      {items.roomNo}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                      {items.year}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                      {items.department}
                    </td>
                    <td className='flex justify-center items-center gap-3 px-4 py-4'>
                        <FaRegEye color='blue' size={18} className='cursor-pointer'/>
                        <FaEdit color='green' size={18} className='cursor-pointer'/>
                        <MdDelete color='red' size={18} className='cursor-pointer'/>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentList