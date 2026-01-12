import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Nosotros from '../pages/Nosotros.jsx'
import Login from '../pages/Login.jsx'
import Registro from '../pages/Registro.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  )
}