import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import AboutDev from './pages/AboutDev.jsx';
import Contacto from './pages/Contacto.jsx';
import Historia from './pages/Historia.jsx';
import Miembros from './pages/Miembros.jsx';
import Fotos from './pages/Fotos.jsx';
import Videos from './pages/Videos.jsx';
import Baile from './pages/Baile.jsx';
import { getAsset } from './utils/assets.js';

export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />

      <main className="flex-1 px-4 md:pl-20 md:pr-4 pb-8">

        <div className="relative w-full h-screen overflow-hidden">
              <div className="fixed inset-0 bg-cover bg-no-repeat -z-10 bg-position-[center_20%] pointer-events-none " style={{ backgroundImage: `url(${getAsset('assets/img/antsa.webp')})`, opacity:0.2 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/aboutdev" element={<AboutDev />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/miembros" element={<Miembros />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/baile" element={<Baile />} />
        </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

