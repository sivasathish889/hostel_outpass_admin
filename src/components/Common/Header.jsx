import { useAuth } from "../../context/AuthProvider"

const Header = () => {
  const {userData} = useAuth()
  return (
    <div className='flex-1 w-full'>
      <div className="icon flex justify-between items-center bg-[#D6D6D6]  h-24">
        <div className="admin_name">
        </div>
        <div className="role rounded-full">
          <div className={`text-left flex mr-5 justify-center items-center select-none`} unselectable='on'>
            <img src="https://placehold.co/400x400/orange/white" alt="" height={50} width={50} className='rounded-full max-w-6xl min-w-12' />
            <div className='mx-3'>
              <div className=''>
                {userData.userName}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header