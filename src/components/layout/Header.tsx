'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    {
      label: 'Serviços',
      path: '/servicos',
      children: [
        { label: 'Contabilidade', path: '/servicos/contabilidade' },
        { label: 'Consultoria Fiscal', path: '/servicos/consultoria-fiscal' },
        { label: 'Consultoria de Gestão', path: '/servicos/consultoria-de-gestao' },
        { label: 'Incentivos ao Investimento', path: '/servicos/incentivos-ao-investimento' },
      ],
    },
    { label: 'Incentivos', path: '/servicos/incentivos-ao-investimento' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contactos', path: '/contactos' },
  ];

  const isActive = (path: string) => {
    if (!pathname) {
      return false;
    }

    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-3 transition-transform duration-500 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            <div className="w-12 h-12 bg-[#C1272D] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BCA</span>
            </div>
            <div className={`hidden sm:block ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
              <div className={`font-bold text-lg leading-tight ${isScrolled ? 'text-[#333]' : 'text-[#333]'}`}>
                BCA
              </div>
              <div className={`text-xs ${isScrolled ? 'text-[#666]' : 'text-[#666]'}`}>
                Business Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={item.path} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive(item.path)
                          ? 'text-[#C1272D]'
                          : isScrolled
                          ? 'text-[#333] hover:text-[#C1272D]'
                          : 'text-[#333] hover:text-[#C1272D]'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>
                    <div
                      className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${
                        isServicesOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden rounded-lg bg-white shadow-xl">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-[#F5F5F5] hover:text-[#C1272D] hover:pl-6 ${
                              isActive(child.path)
                                ? 'text-[#C1272D] bg-[#F5F5F5]'
                                : 'text-[#666]'
                            }`}
                            style={{ animationDelay: `${childIndex * 50}ms` }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                      isActive(item.path)
                        ? 'text-[#C1272D]'
                        : isScrolled
                        ? 'text-[#333] hover:text-[#C1272D]'
                        : 'text-[#333] hover:text-[#C1272D]'
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#C1272D] transition-all duration-300 ${
                        isActive(item.path)
                          ? 'w-6'
                          : 'w-0 group-hover:w-6'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:252642059"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-[#666] hover:text-[#C1272D]' : 'text-[#666] hover:text-[#C1272D]'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>252 642 059</span>
            </a>
            <Link
              href="/contactos"
              className="btn-primary text-sm animate-pulse-soft"
            >
              Fale Connosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#333]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-white rounded-lg shadow-lg p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.children ? (
                  <div className="space-y-2">
                    <Link
                      href={item.path}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-2 text-sm font-medium rounded-md ${
                        isActive(item.path)
                          ? 'text-[#C1272D] bg-[#F5F5F5]'
                          : 'text-[#333] hover:bg-[#F5F5F5]'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-2 text-sm rounded-md ${
                            isActive(child.path)
                              ? 'text-[#C1272D] bg-[#F5F5F5]'
                              : 'text-[#666] hover:bg-[#F5F5F5]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-2 text-sm font-medium rounded-md ${
                      isActive(item.path)
                        ? 'text-[#C1272D] bg-[#F5F5F5]'
                        : 'text-[#333] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#E0E0E0]">
              <a
                href="tel:252642059"
                className="flex items-center gap-2 px-4 py-2 text-sm text-[#666]"
              >
                <Phone className="w-4 h-4" />
                <span>252 642 059</span>
              </a>
              <Link
                href="/contactos"
                onClick={closeMobileMenu}
                className="btn-primary w-full mt-2 text-sm"
              >
                Fale Connosco
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
