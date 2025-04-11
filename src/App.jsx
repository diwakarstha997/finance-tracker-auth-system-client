import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/Auth/SignupPage'
import SignupSuccess from './pages/Auth/SignupSuccess'
import VerifyEmailPage from './pages/Auth/VerifyEmailPage'
import LoginPage from './pages/Auth/LoginPage'
import UserHomePage from './pages/UserHomePage'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />

        {/* Register Route */}
        <Route path="/register" element={<SignupPage />} />
        <Route path="/register-success/:email" element={<SignupSuccess />} />
        <Route path="/email-verification" element={<VerifyEmailPage />} />

        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/auth/home" element={
          <PrivateRoute>
            <UserHomePage />
          </PrivateRoute>
        } />

        
      </Routes>
  )
}

export default App
