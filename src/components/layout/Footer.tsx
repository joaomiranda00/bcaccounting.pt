import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contactos', path: '/contactos' },
    { label: 'FAQ', path: '/faq' },
  ];

  const services = [
    { label: 'Contabilidade', path: '/servicos/contabilidade' },
    { label: 'Consultoria Fiscal', path: '/servicos/consultoria-fiscal' },
    { label: 'Consultoria de Gestão', path: '/servicos/consultoria-de-gestao' },
    { label: 'Incentivos ao Investimento', path: '/servicos/incentivos-ao-investimento' },
  ];

  const legalLinks = [
    { label: 'Política de Privacidade', path: '/politica-de-privacidade' },
    { label: 'Termos e Condições', path: '/termos-e-condicoes' },
    { label: 'Cookies', path: '/cookies' },
  ];

  return (
    <footer className="bg-[#333333] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#C1272D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BCA</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">BCA</div>
                <div className="text-xs text-gray-400">Business Consulting</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Business Consulting and Accounting - Soluções profissionais de 
              contabilidade e consultoria de gestão para o sucesso do seu negócio.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#C1272D] hover:scale-110 hover:rotate-6"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#C1272D] hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 text-sm transition-all duration-300 hover:text-[#C1272D] hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    href={service.path}
                    className="text-gray-400 text-sm transition-all duration-300 hover:text-[#C1272D] hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C1272D] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Edifício Alameda, Sala 3, 1.º Andar<br />
                  Avenida Dr. João Canavarro, n.º 305<br />
                  4480-668 Vila do Conde
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C1272D] flex-shrink-0" />
                <a
                  href="tel:252642059"
                  className="text-gray-400 text-sm transition-colors duration-300 hover:text-[#C1272D]"
                >
                  252 642 059
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C1272D] flex-shrink-0" />
                <a
                  href="mailto:bca@bcaccounting.pt"
                  className="text-gray-400 text-sm transition-colors duration-300 hover:text-[#C1272D]"
                >
                  bca@bcaccounting.pt
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C1272D] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Segunda a Sexta: 9h - 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} BCA - Business Consulting and Accounting, Lda. 
              Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link, index) => (
                <span key={link.path} className="flex items-center gap-4">
                  <Link
                    href={link.path}
                    className="text-gray-400 text-sm transition-colors duration-300 hover:text-[#C1272D]"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
