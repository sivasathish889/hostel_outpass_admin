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
    borderRadius: 3
};
const EditModal = (props) => {
    const { handleEditClose, editOpen, editingHolderData, refresh, setRefresh } = props
    const { RegisterNumber, name, Email, PhoneNumber, year, Department, District, Gender, ParentNumber, _id } = editingHolderData
    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const editingData = Object.fromEntries(formData.entries())
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
                    axios.put(`/updateStudent/${_id}`, editingData)
                        .then((res) => {
                            if (res.data.success) {
                                handleEditClose();
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
                            }
                            else {
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
                <Box sx={style}>
                    <div >
                        <div className="flex justify-between">
                            <h1 className='text-xl'><span className='underline underline-offset-8  text-primary text-2xl'>Student</span> Details</h1>
                            <FaXmark color='red' size={20} onClick={() => handleEditClose()} className='cursor-pointer ' />
                        </div>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='flex gap-4 mt-7'>
                            <input type="text" name="RegisterNumber" id="" className='border border-black px-2 py-2 text-sm  focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Register Number' defaultValue={RegisterNumber} onClick={handleTextSelect} />
                            <input type="text" name="Name" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Name' defaultValue={name} onClick={handleTextSelect} />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="email" name="email" id="" className='border border-black px-2 py-2 w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='E-Mail' defaultValue={Email} onClick={handleTextSelect} />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <input type="text" name="District" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='District' defaultValue={District} onClick={handleTextSelect} />
                            <select name="gender" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg w-full placeholder:text-sm' defaultValue={Gender}>
                                <option value=" " >--Select Gender--</option>
                                <option value="Male" >Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="text" name="department" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder=' Department' defaultValue={Department} onClick={handleTextSelect} />
                            <select name="year" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg w-full placeholder:text-sm' defaultValue={year}>
                                <option value="" >--Select Year--</option>
                                <option value="1" >I</option>
                                <option value="2">II</option>
                                <option value="3">III</option>
                                <option value="4">IV</option>
                            </select>                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="number" name="phone_number" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder=' Phone Number' defaultValue={PhoneNumber} onClick={handleTextSelect} />
                            <input type="number" name="parent_number" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Parent number' defaultValue={ParentNumber} onClick={handleTextSelect} />
                        </div>

                        <div className="btns flex justify-end gap-3 mt-4">
                            <button type='button' className="cancel text-sm rounded-sm bg-slate-400 border border-black px-4 py-1" onClick={handleEditClose}>Cancel</button>
                            <button type='submit' className="update text-sm rounded-sm bg-primary text-white border border-black px-4 py-1" >Update</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default EditModal