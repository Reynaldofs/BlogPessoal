import React from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListaTema from './pages/Components/temas/listatema/ListaTema'
import ListaPostagem from './pages/Components/postagens/listapostagem/ListaPostagem'
import CadastroPost from './pages/Components/postagens/cadastroPost/CadastroPost'
import CadastroTema from './pages/Components/temas/cadastroTema/CadastroTema'
import DeletarPostagem from './pages/Components/postagens/deletarPostagem/DeletarPostagem'
import DeletarTema from './pages/Components/temas/deletarTema/DeletarTema'

function App() {

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
} export default App



