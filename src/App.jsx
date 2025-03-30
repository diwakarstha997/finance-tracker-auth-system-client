import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/Auth/SignupPage'
import SignupSuccess from './pages/Auth/SignupSuccess'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/register"/>} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/register-success" element={<SignupSuccess />} />
      </Routes>
  )
}

export default App
