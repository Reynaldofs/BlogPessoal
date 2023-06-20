import React from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Components/footer/Footer'
import  Home  from './pages/Home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/" element={<Login  />} />
   
    <Route path="/home" element={<Home />} />
    <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  )
} export default App



