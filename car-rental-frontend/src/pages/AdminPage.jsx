import SidebarComponent from '../components/userDashboard/SidebarComponent'
import NavbarComponent from '../components/userDashboard/NavbarComponent'
import MainComponent from '../components/AdminDashboard/MainComponent'

const AdminDashboard = () => {
  return (
    <div className='w-full min-h-screen flex bg-[#FAF8FF]'>
      <div className='w-1/5'>
        <SidebarComponent />
      </div>

      <div className='w-4/5'>
        <NavbarComponent />
        <MainComponent />
      </div>
    </div>
  )
}

export default AdminDashboard
