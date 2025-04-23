import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import { IoSendOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthProvider'

const Login = () => {
  const navigate = useNavigate()
  const { isLogin,setRefresh, refresh } = useAuth()

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
    else {
      navigate("/")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const body = Object.fromEntries(formData.entries())
    try {
      await axios.post("/login", body).then((res) => {
        if (res.data.success) {
          setRefresh(!refresh)
          navigate('/dashboard')
          localStorage.setItem('__adminUser', res.data.userID)
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
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
          })
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <div className="container flex justify-center items-center h-[100vh]">
        <div className="form ">
          <form onSubmit={handleSubmit} className='gap-3 border p-4 rounded-md bg-primary/90'>
            <div className="heading">
              <h1 className='text-center text-xl underline'>Login</h1>
            </div>
            <div className="main flex flex-col gap-3 w-72 mt-9">
              <TextField id="userName" color='white' label="User Name" name='userName' variant="standard" type='text' />
              <TextField id="password" color='white' label="Password" type='password' variant="standard" name='password' />
              <div className='justify-center items-center flex my-5'>
                <Button variant="contained" type='submit' endIcon={<IoSendOutline />}>
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login