import Navbar from '../components/Navbar'
import LoginCard from '../components/LoginCard'
import Footer from '../components/Footer'

const LoginPage = () => {
  return (
    <div className='bg-[#f8fafced] min-h-screen w-full text-black'>
      <Navbar state={false}/>
      <LoginCard />
      <Footer />
    </div>
  )
}

export default LoginPage
