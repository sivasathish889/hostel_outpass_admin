import { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditModal from './EditModal';
import Loader from '../Common/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const WardenList = ({ searchQuery, genderQuery, refresh, setRefresh }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [editingHolderData, setEditingHolderData] = useState({})


  let handleEditOpen = (userName, email, phoneNumber, role, _id) => {
    setEditingHolderData({ userName, email, phoneNumber, role, _id })
    setEditOpen(true)
  };
  const handleEditClose = () => {
    setEditOpen(false)
  };

  const fetchData = async () => {
    try {
      await axios.get("/getWardenList").then((data) => {
        setLoading(true)
        setData(data.data.users)
        setLoading(false)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchData()
  }, [refresh])

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
        await axios.delete(`/deleteWarden/${_id}`).then((res) => {
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

  const filteredData = data.filter((item) => {
    if (searchQuery && genderQuery) {
      return (
        item.userName.toString().includes(searchQuery) ||
        item.email.toString().includes(searchQuery) ||
        item.phoneNumber.toString().includes(searchQuery)
      ) && item.role.toString().includes(genderQuery);
    } else if (searchQuery) {
      return (
        item.userName.toString().includes(searchQuery) ||
        item.email.toString().includes(searchQuery) ||
        item.phoneNumber.toString().includes(searchQuery)
      );
    } else if (genderQuery) {
      return item.role.toString().toLowerCase().includes(genderQuery.toLowerCase());
    } else {
      return true;
    }
  });

  return (
    <div className="flex flex-col h-[70vh]">
      <div className="overflow-x-auto">
        {loading ? <Loader visible={loading} /> :
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-200 sticky top-0 z-10">
                  <tr className=''>
                    {['No', "User Name", "E-mail", "Phone Number", "Gender", "Action"].map((el, index) => {
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
                  {filteredData.map(({ userName, email, phoneNumber, role, _id }, index) => {
                    return <tr key={index}>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {userName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                        {email}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                        {phoneNumber}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">

                        {role}
                      </td>
                      <td className='flex justify-center items-center gap-3 px-4 py-4'>
                        <FaEdit color='green' size={18} className='cursor-pointer' onClick={() => handleEditOpen(userName, email, phoneNumber, role, _id)} />
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

export default WardenList