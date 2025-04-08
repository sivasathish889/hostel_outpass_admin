import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditModal from './EditModal';
import Loader from '../Common/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"
import swal from "sweetalert"

const PassList = () => {
    const [editOpen, setEditOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true)
    const [data, setData] = useState([])
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);

    const fetchData = async () => {
        try {
            await axios.get("/getPass").then((data) => {
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

    const handleDelete = async (id) => {
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
                                    transition: Bounce,
                                });
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
                                    transition: Bounce,
                                });
                            }
                            // fetchData()
                        })
                    } catch (error) {
                        console.log(error.message)
                    }
                }
            });
    }

    return (
        <div className="flex flex-col h-[60vh]">
            <div className="overflow-x-auto">
                {isVisible ? <Loader visible={isVisible} /> :
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 border">
                                <thead className="bg-gray-200 ">
                                    <tr className=''>
                                        {['No', "Register Number", "Student Name", "Room No", "Gender", "Warden", "Security", "Action"].map((el, index) => {
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
                                    {data.length < 0 ? <h2 >No data</h2> :
                                        data.map((items, index) => {
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
                                                <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap border  border-e-gray-200">
                                                    {items.RoomNo}
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                                                    {items.Gender}
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                                                    {items.warden}
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap border  border-e-gray-200">
                                                    {items.security}
                                                </td>

                                                <td className='flex justify-center items-center gap-3 px-4 py-4'>
                                                    <Link to={items._id} state={items}>
                                                        <FaEye color='blue' size={18} className='cursor-pointer' />
                                                    </Link>
                                                    {/* <FaEdit color='green' size={18} className='cursor-pointer' onClick={handleEditOpen} /> */}
                                                    <MdDelete color='red' size={18} className='cursor-pointer' onClick={() => handleDelete(items._id)} />
                                                </td>
                                            </tr>
                                        })
                                    }
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

export default PassList