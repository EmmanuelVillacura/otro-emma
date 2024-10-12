import { useState,useRef } from 'react'

import './App.css'
import Login from './pages/login/Login';

import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import GestionParquimetro from './pages/main/parquimetro/gestionParquimetro/GestionParquimetro';
import Layout from './components/components/layout/Layout';



function App() {

  const toast = useRef(null);

  const [login,setLogin] = useState(true)

  return (
    <Router>
      <Toast ref={toast} position="top-center" />
      {login ? <>
        <Layout />
        <Routes>
        <Route path="/parquimetro/gestion-parquimetro" element={<GestionParquimetro/>} />
        <Route path="*" element={<Navigate to="/parquimetro/gestion-parquimetro" />} />
      </Routes>
      </>:<Routes>
        <Route path='/login' element={<Login toast={toast} setLogin={setLogin}/>}/>
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>}
      
      
      
    </Router>
  )
}

export default App
