import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;