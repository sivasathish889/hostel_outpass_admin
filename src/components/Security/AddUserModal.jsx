import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaXmark } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
    borderRadius: 3,
    width : "20%",
    minWidth : "25%"
};
const AddUserModal = (props) => {
    const { handleClose, addModal, setRefresh, refresh } = props

    const handleCreate = async (e) => {
        e.preventDefault();
        const body = {
            "userName": e.target.userName.value,
            "email": e.target.email.value,
            "phoneNumber": e.target.phoneNumber.value,
            "password": e.target.password.value
        }
        await axios.post("/createSecurity", body).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                e.target.reset();
                setRefresh(!refresh)
                handleClose()
            } else {
                toast.warning(res.data.message, {
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
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <Modal
                open={addModal}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div >
                        <div className="flex justify-between">
                            <h1 className='text-xl'><span className='underline underline-offset-8  text-primary text-2xl'>Add</span> Security</h1>
                            <FaXmark color='red' size={20} onClick={() => handleClose()} className='cursor-pointer ' />
                        </div>
                    </div>
                    <form onSubmit={handleCreate}>
                        <div className='flex gap-4 mt-7'>
                            <input type="text" name="userName"  className='border border-black px-2 py-2 text-sm w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='User Name' required />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="email" name="email"  className='border border-black px-2 py-2 w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='E-Mail' required />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <input type="number" name="phoneNumber"  className='border border-black px-2 py-2 text-sm w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Phone Number' required />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="password" name="password"  className='border border-black px-2 py-2 text-sm w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Enter Password' required />
                        </div>

                        <div className="btns flex justify-end gap-3 mt-4">
                            <button type='button' className="cancel text-sm rounded-sm bg-slate-400 border border-black px-4 py-1" onClick={handleClose}>Cancel</button>
                            <button className="update text-sm rounded-sm bg-primary text-white border border-black px-4 py-1" type='submit'>Create</button>
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default AddUserModal