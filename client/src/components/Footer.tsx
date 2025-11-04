export default function Footer() {
  return (
    <footer className="bg-[#0B4A6B] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Consórcio Potência</h3>
            <p className="text-gray-300 text-sm">
              Construções • Terraplenagem • Locações
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Soluções integradas em infraestrutura desde 1987
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-gray-300 text-sm mb-2">
              Av. Jandira, Nº 295, Sala 102<br />
              Indianópolis, São Paulo - SP<br />
              CEP: 04.080-918
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Consórcio Potência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
