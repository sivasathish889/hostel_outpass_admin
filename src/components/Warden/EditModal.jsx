import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaXmark } from "react-icons/fa6";
import swal from "sweetalert"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
    borderRadius: 3
};
const EditModal = (props) => {
    const [loading, setLoading] = useState(false)
    const { handleEditClose, editOpen, editingHolderData, refresh, setRefresh } = props
    const { userName, email, phoneNumber, role, _id } = editingHolderData

    const handleUpdate = (e) => {
        setLoading(true)
        e.preventDefault()
        const editingData = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            role: e.target.gender.value
        }
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to update the data?",
            icon: "warning",
            closeOnEsc: true,
            closeOnClickOutside: true,
            buttons: ["Cancel", "Confirm"]
        })
            .then(async (willUpdate) => {
                if (willUpdate) {
                    await axios.put(`/updateWarden/${_id}`, editingData).then((res) => {
                        if (res.data.success) {
                            handleEditClose()
                            setRefresh(!refresh)
                            toast.success(res.data.message, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
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
                        setLoading(false)
                    }).catch((err) => {
                        console.log(err.message)
                        swal("Failed to update", {
                            icon: "error",
                        });
                    })
                }
            });
    }
    const handleTextSelect = (e) => {
        e.target.select()
    }

    return (
        <div>
            <Modal
                open={editOpen}
                onClose={handleEditClose}
            >
                {loading ? <Loader visible={loading} /> :
                    <Box sx={style}>
                        <div >
                            <div className="flex justify-between">
                                <h1 className='text-xl'><span className='underline underline-offset-8  text-primary text-2xl'>Warden</span> Details</h1>
                                <FaXmark color='red' size={20} onClick={() => handleEditClose()} className='cursor-pointer ' />
                            </div>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <div className='flex gap-4 mt-7'>
                                <input type="text" name="userName"  className='border border-black px-2 py-2 text-sm w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='User Name' defaultValue={userName} onClick={handleTextSelect} />
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <input type="email" name="email"  className='border border-black px-2 py-2 w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='E-Mail' defaultValue={email} onClick={handleTextSelect} />
                            </div>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="phoneNumber"  className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Phone Number' defaultValue={phoneNumber} onClick={handleTextSelect} />
                                <select name="gender"  className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg w-full placeholder:text-sm' defaultValue={role}>
                                    <option value=" " >--Select Gender--</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div className="btns flex justify-end gap-3 mt-4">
                                <button type='button' className="cancel text-sm rounded-sm bg-slate-400 border border-black px-4 py-1" onClick={handleEditClose}>Cancel</button>
                                <button type='submit' className="update text-sm rounded-sm bg-primary text-white border border-black px-4 py-1" >Update</button>
                            </div>

                        </form>
                    </Box>
                }
            </Modal>
        </div>
    );
}

export default EditModal