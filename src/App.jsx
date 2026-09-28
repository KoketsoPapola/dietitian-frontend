import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ClientRegister from './pages/ClientRegister'
import DietitianRegister from './pages/DietitianRegister'
import Appointments from './pages/Appointments'
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/client" element={<ClientRegister />} />
          <Route path="/register/dietitian" element={<DietitianRegister />} />
          <Route path="/appointments" element={<Appointments />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App