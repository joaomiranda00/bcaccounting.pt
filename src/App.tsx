import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contabilidade from './pages/Contabilidade';
import ConsultoriaFiscal from './pages/ConsultoriaFiscal';
import ConsultoriaGestao from './pages/ConsultoriaGestao';
import Incentivos from './pages/Incentivos';
import Contactos from './pages/Contactos';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosCondicoes from './pages/TermosCondicoes';
import Cookies from './pages/Cookies';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/contabilidade" element={<Contabilidade />} />
            <Route path="/servicos/consultoria-fiscal" element={<ConsultoriaFiscal />} />
            <Route path="/servicos/consultoria-de-gestao" element={<ConsultoriaGestao />} />
            <Route path="/servicos/incentivos-ao-investimento" element={<Incentivos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-e-condicoes" element={<TermosCondicoes />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
