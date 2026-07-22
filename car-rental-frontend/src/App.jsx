import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'
import LandingPage from './pages/LandingPage'

const App = () => {

  return (
    <div className='min-h-screen w-full text-black'>
      <Routes>
        <Route path='/register' element={< RegisterPage/>} />
        <Route path='/login' element={< LoginPage/>} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/landingPage' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
