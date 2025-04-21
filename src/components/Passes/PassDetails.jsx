import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import EditModal from './EditModal';
import swal from "sweetalert"
import axios from 'axios';
import { toast } from 'react-toastify';

const PassDetails = () => {
  const navigate = useNavigate()
  const data = useLocation().state
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const handleDelete = async (id) => {
    console.log(id)
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to update the data?",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["Cancel", "Confirm"]
    })
      .then(async (willDelete) => {
        if (willDelete) {
          try {
            await axios.delete(`/deletePass/${id}`).then((data) => {
              if (data.data.success) {
                toast.success(data.data.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate("/passes")
              }
              else {
                toast.success(data.data.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            })
          } catch (error) {
            console.log(error.message)
          }
        }
      });
  }

  return (
    <div className='m-10 overflow-scroll h-[78vh]'>
      <div className="header flex justify-between bg-primary p-3 roundend-md sticky top-0">
        <div className="name text-xl text-white">{data.name}</div>
        <div className="action space-x-3">
          {/* <button className='bg-green-700 text-white py-1 rounded-md px-6 border border-black cursor-pointer' onClick={handleEditOpen}>Edit </button> */}
          <button className='bg-red-800 text-white py-1 rounded-md px-6 border border-black cursor-pointer' onClick={() => handleDelete(data._id)}>Delete </button>
        </div>
      </div>

      <div className="main bg-secondary p-6 rounded-md">
        <table>
          <tbody className='text-xl'>
            <tr >
              <td>Register Number  </td>
              <td className='px-5'>:</td>
              <td>{data.RegisterNumber}</td>
            </tr>
            <tr>
              <td>Name  </td>
              <td className='px-5'>:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Department  </td>
              <td className='px-5'>:</td>
              <td>{data.Department}</td>
            </tr>
            <tr>
              <td>Year  </td>
              <td className='px-5'>:</td>
              <td>{data.year}</td>
            </tr>
            <tr>
              <td>Gender  </td>
              <td className='px-5'>:</td>
              <td>{data.Gender}</td>
            </tr>
            <tr>
              <td>Room No  </td>
              <td className='px-5'>:</td>
              <td>{data.RoomNo}</td>
            </tr>
            <tr>
              <td>Destination  </td>
              <td className='px-5'>:</td>
              <td>{data.Destination}</td>
            </tr>
            <tr>
              <td>Purpose  </td>
              <td className='px-5'>:</td>
              <td>{data.Purpose}</td>
            </tr>
            <tr>
              <td>Phone Number  </td>
              <td className='px-5'>:</td>
              <td>{data.PhoneNumber}</td>
            </tr>
            <tr>
              <td>Parent Number  </td>
              <td className='px-5'>:</td>
              <td>{data.ParentNumber}</td>
            </tr>
            <tr>
              <td>Pass Out Time  </td>
              <td className='px-5'>:</td>
              <td>{data.OutDateTime}</td>
            </tr>
            <tr>
              <td>Pass In Time  </td>
              <td className='px-5'>:</td>
              <td>{data.InDateTime}</td>
            </tr>
            <tr>
              <td>Approved Warden  </td>
              <td className='px-5'>:</td>
              <td>{data.warden}</td>
            </tr>
            <tr>
              <td>Approved Security  </td>
              <td className='px-5'>:</td>
              <td>{data.security}</td>
            </tr>
            <tr>
              <td>Gate Out Time  </td>
              <td className='px-5'>:</td>
              <td>{data.studentOutTime}</td>
            </tr>
            <tr>
              <td>Gate In Time  </td>
              <td className='px-5'>:</td>
              <td>{data.studentInTime}</td>
            </tr>
          </tbody>
        </table>

      </div>
      <EditModal handleEditClose={handleEditClose} editOpen={editOpen} setEditOpen={setEditOpen} />

    </div>
  )
}

export default PassDetails