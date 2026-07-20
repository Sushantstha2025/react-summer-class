import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserDashboard from './pages/UserDashboard'

const App = () => {

  return (
    <div className='min-h-screen w-full text-black'>
      <Routes>
        <Route path='/register' element={< RegisterPage/>} />
        <Route path='/login' element={< LoginPage/>} />
        <Route path='/user' element={<UserDashboard />} />
      </Routes>
    </div>
  )
}

export default App
