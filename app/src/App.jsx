import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import AboutDev from './pages/AboutDev.jsx';
import Contacto from './pages/Contacto.jsx';
import Historia from './pages/Historia.jsx';
import Miembros from './pages/Miembros.jsx';
import Galeria from './pages/Galeria.jsx';
import FiltroVideos from './pages/FiltroVideos.jsx';
import Baile from './pages/Baile.jsx';


export default function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/aboutdev" element={<AboutDev />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/miembros" element={<Miembros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/filtrovideos" element={<FiltroVideos />} />
          <Route path="/baile" element={<Baile />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

