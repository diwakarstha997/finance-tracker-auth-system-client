import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/Auth/SignupPage'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/register"/>} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
  )
}

export default App
