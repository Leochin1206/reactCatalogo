import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Catalogo } from './pages/catalogo'
import { CatalogoSeries } from './pages/catalogoSerie'
import { Perfil } from './pages/perfil'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/CatalogoSeries" element={<CatalogoSeries />} />
      <Route path="/Perfil" element={<Perfil />} />
    </Routes>
  )
}

export default App
