import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaXmark } from "react-icons/fa6";
import swal from "sweetalert"
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
    const { handleEditClose, editOpen, setViewOpen } = props
    const handleUpdate = () => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to update the data?",
            icon: "warning",
            closeOnEsc : true,
            closeOnClickOutside : true,
            buttons : ["Cancel","Confirm"]
        })
            .then(willDelete => {
                console.log(willDelete)
                if (willDelete) {
                    swal("Deleted!", "Your imaginary file has been deleted!", "success");
                }
            });
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
                    <div>
                        <div className='flex gap-4 mt-7'>
                            <input type="text" name="register_number" id="" className='border border-black px-2 py-2 text-sm  focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Register Number' />
                            <input type="text" name="Name" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Name' />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="email" name="E-mail" id="" className='border border-black px-2 py-2 w-full focus:outline-primary rounded-lg placeholder:text-sm' placeholder='E-Mail' />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <input type="text" name="District" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='District' />
                            <select name="gender" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg w-full placeholder:text-sm'>
                                <option value=" " defaultChecked>--Select Gender--</option>
                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="text" name="department" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder=' Department' />
                            <select name="year" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg w-full placeholder:text-sm'>
                                <option value="" defaultChecked>--Select Year--</option>
                                <option value="1" >I</option>
                                <option value="2">II</option>
                                <option value="3">III</option>
                                <option value="4">IV</option>
                            </select>                        </div>
                        <div className='flex gap-4 mt-4'>
                            <input type="number" name="phone_number" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder=' Phone Number' />
                            <input type="number" name="parent_number" id="" className='border border-black px-2 py-2 text-sm focus:outline-primary rounded-lg placeholder:text-sm' placeholder='Parent number' />
                        </div>

                        <div className="btns flex justify-end gap-3 mt-4">
                            <button className="cancel text-sm rounded-sm bg-slate-400 border border-black px-4 py-1" onClick={handleEditClose}>Cancel</button>
                            <button className="update text-sm rounded-sm bg-primary text-white border border-black px-4 py-1"onClick={()=>handleUpdate()}>Update</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default EditModal