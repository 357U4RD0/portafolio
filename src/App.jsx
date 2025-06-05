import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyecto from './pages/Proyecto'
import Habilidad from './pages/Habilidad';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyecto />} />
        <Route path="/habilidades" element={<Habilidad />} />
        <Route path="/contactos" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;