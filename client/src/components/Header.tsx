import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-linear-to-br from-[#0B4A6B] to-[#00D4FF] rounded-lg flex items-center justify-center">
              <img src="/public/lgo_consorcio.png" alt="" className="w-32 h-auto" />             
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#0B4A6B] font-bold text-lg">CONSÓRCIO</h1>
              <h2 className="text-[#0B4A6B] text-xl font-semibold leading-none">POTÊNCIA</h2>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#0B4A6B] font-medium hover:text-[#FF8C00] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0B4A6B]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#0B4A6B] font-medium hover:text-[#FF8C00] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
