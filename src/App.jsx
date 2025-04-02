import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/Auth/SignupPage'
import SignupSuccess from './pages/Auth/SignupSuccess'
import VerifyEmailPage from './pages/Auth/VerifyEmailPage'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/register"/>} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/register-success/:email" element={<SignupSuccess />} />
        <Route path="/email-verification" element={<VerifyEmailPage />} />
      </Routes>
  )
}

export default App
