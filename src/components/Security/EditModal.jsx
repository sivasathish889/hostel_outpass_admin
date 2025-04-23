import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaXmark } from "react-icons/fa6";
import swal from "sweetalert"
import axios from 'axios';
import { toast } from 'react-toastify';
const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
    borderRadius: 3,
    width: "20%",
    minWidth: "25%"
};
const EditModal = (props) => {
    const { handleEditClose, editOpen, editingHolderData, setRefresh,refresh } = props
    const { userName, email, phoneNumber, _id } = editingHolderData
    const handleUpdate = (e) => {
        e.preventDefault()
        const body = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
        }

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
                    await axios.put(`/updateSecurity/${_id}`, body).then((res) => {
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
                    }).catch((err) => {
                        console.log(err.message)
                        swal("Failed to update", {
                            icon: "error",
                        });
                    })
                }
            });
    }

    const handleSelectText = (e) => {
        e.target.select()
    }
    return (
        <div>
            <Modal
                open={editOpen}
                onClose={handleEditClose}
            >
                <Box sx={style}>
                    <div >
                        <div className="flex justify-between">
                            <h1 className='text-xl'><span className='underline underline-offset-8  text-primary text-2xl'>Security</span> Details</h1>
                            <FaXmark color='red' size={20} onClick={() => handleEditClose()} className='cursor-pointer ' />
                        </div>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='flex gap-4 mt-7'>
                            <input type="text" name="userName" id="" className='border border-black px-2 py-2 text-sm w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='User Name' defaultValue={userName} onClick={handleSelectText} />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="email" name="email" id="" className='border border-black px-2 py-2 w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='E-Mail' defaultValue={email} onClick={handleSelectText} />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <input type="text" name="phoneNumber" id="" className='border border-black px-2 w-full py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Phone Number' defaultValue={phoneNumber} onClick={handleSelectText} />

                        </div>

                        <div className="btns flex justify-end gap-3 mt-4">
                            <button type='button' className="cancel text-sm rounded-sm bg-slate-400 border border-black px-4 py-1" onClick={handleEditClose}>Cancel</button>
                            <button type='submit' className="update text-sm rounded-sm bg-primary text-white border border-black px-4 py-1">Update</button>
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default EditModal