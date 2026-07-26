import Navbar from '../components/Navbar'
import RegisterCard from '../components/RegisterCard'
import Footer from '../components/Footer'

const RegisterPage = () => {
  return (
    <div className='bg-[#f8fafced] min-h-screen w-full text-black'>
      <Navbar state={false} />
      <RegisterCard />
      <Footer />
    </div>
  )
}

export default RegisterPage
