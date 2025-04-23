import { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditModal from './EditModal';
import axios from 'axios';
import Loader from '../Common/Loader';
import { toast } from 'react-toastify';

const StudentList = (props) => {
  const { searchQuery, dateQuery, departmentQuery } = props

  const [editOpen, setEditOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [editingHolderData, setEditingHolderData] = useState({})

  const handleEditOpen = (RegisterNumber, name, Email, year, ParentNumber, District, Department, Gender, PhoneNumber, _id) => {
    setEditingHolderData({
      RegisterNumber, name, Email, year, ParentNumber, District, Department, Gender, PhoneNumber, _id
    })
    setEditOpen(true)
  };
  const handleEditClose = () => {
    setEditOpen(false)
    setEditingHolderData({})
  };

  const handleDelete = async (_id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to update the data?",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["Cancel", "Confirm"]
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(`/deleteStudent/${_id}`).then((res) => {
          if (res.data.success) {
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setRefresh(!refresh)
          } else {
            toast.warning(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }).catch((err) => {
          console.log(err.message)
        })
      }
    }).catch((err) => {
      console.log(err.message)
      swal("Failed to update", {
        icon: "error",
      });
    })
  }

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
  }, [refresh])
  const filteredData = data.filter((item) => {
    const fullDate = `${new Date(item.createdAt).getDate()}-${new Date(item.createdAt).getMonth() + 1}-${new Date(item.createdAt).getFullYear()}`;

    if (departmentQuery && searchQuery && dateQuery) {
      return (
        item.year.toString().includes(departmentQuery.toString()) &&
        (item.RegisterNumber.toString().includes(searchQuery) ||
          item.name.toLowerCase().includes(searchQuery) ||
          item.Email.toLowerCase().includes(searchQuery) ||
          item.PhoneNumber.toString().includes(searchQuery) ||
          item.District.toLowerCase().includes(searchQuery)) &&
        fullDate.includes(dateQuery)
      );
    } else if (searchQuery) {
      return (
        item.RegisterNumber.toString().includes(searchQuery) ||
        item.name.toLowerCase().includes(searchQuery) ||
        item.Email.toLowerCase().includes(searchQuery) ||
        item.PhoneNumber.toString().includes(searchQuery) ||
        item.District.toLowerCase().includes(searchQuery)
      );
    } else if (departmentQuery) {
      return item.year.toString().includes(departmentQuery.toString());
    } else if (dateQuery) {
      return fullDate.includes(dateQuery);
    } else {
      return true;
    }
  });

  return (
    <div className="flex flex-col h-[60vh]">
      <div className="overflow-x-auto">
        {isVisible ? <Loader visible={isVisible} /> :

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-200 ">
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
                  {filteredData.map(({ RegisterNumber, name, Email, PhoneNumber, year, Department, District, Gender, ParentNumber, _id }, index) => {
                    return <tr key={index}>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {RegisterNumber}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {name}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {Email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">

                        {PhoneNumber}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {year}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {Department}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {District}
                      </td>
                      <td className='flex justify-center items-center gap-3 px-4 py-4'>
                        <FaEdit color='green' size={18} className='cursor-pointer' onClick={() => handleEditOpen(RegisterNumber, name, Email, year, ParentNumber, District, Department, Gender, PhoneNumber, _id)} />
                        <MdDelete color='red' size={18} className='cursor-pointer' onClick={() => handleDelete(_id)} />
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
      <EditModal handleEditClose={handleEditClose} editOpen={editOpen} setEditOpen={setEditOpen} editingHolderData={editingHolderData} refresh={refresh} setRefresh={setRefresh} />
    </div>
  )
}

export default StudentList