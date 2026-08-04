import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import VerifyOTPPage from './pages/VerifyOTPPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'
import LandingPage from './pages/LandingPage'
import ViewFleetPage from './pages/ViewFleetPage'
import BookingPage from './pages/BookingPage'
import { useAuth } from './context/AuthContext'

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/user" replace />;
  }

  return children;
};

const App = () => {
  return (
    <div className='min-h-screen w-full text-black bg-[#FAF8FF]'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/verify-otp' element={<VerifyOTPPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/viewFleetPage' element={<ViewFleetPage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/booking/:id' element={<BookingPage />} />
        
        <Route 
          path='/user' 
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/admin' 
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  )
}

export default App
