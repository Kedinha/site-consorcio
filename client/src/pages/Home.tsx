import { Link } from 'wouter';
import { Home, HardHat, Target, Users, FileText, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const sections = [
    {
      icon: Home,
      title: 'Introdução',
      description: 'Conheça o Consórcio Potência',
      href: '/sobre',
    },
    {
      icon: HardHat,
      title: 'Áreas de Atuação',
      description: 'Construção, Terraplenagem e Locações',
      href: '/servicos',
    },
    {
      icon: Target,
      title: 'Visão, Missão e Valores',
      description: 'Nossos compromissos e princípios',
      href: '/sobre',
    },
    {
      icon: Users,
      title: 'Empresas Consorciadas',
      description: 'Conheça nossos parceiros',
      href: '/sobre',
    },
    {
      icon: FileText,
      title: 'Dados Técnicos',
      description: 'Informações jurídicas e técnicas',
      href: '/servicos',
    },
    {
      icon: Truck,
      title: 'Localização de Equipamentos',
      description: 'Frota disponível para locação',
      href: '/servicos',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[url(/public/home_banner.jpg)] scroll-m-20 bg-cover  bg-linear-to-r from-[#0B4A6B] to-[#0D5A7B] text-white py-20 md:py-32 ">
        
        <div className="container">
          <div className="max-w-3xl">
            <div className="mb-8">
              <div className="inline-block bg-[#FF8C00] px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-semibold">Desde 1987</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consórcio Potência
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Construções • Terraplenagem • Locações
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Soluções integradas em infraestrutura para grandes projetos no Brasil
            </p>
            <Link href="/contato">
              <button className="bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Entre em Contato
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-16 text-center">
            Por onde você quer começar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} href={section.href}>
                  <div className="p-8 border-2 border-[#00D4FF] rounded-lg hover:shadow-lg hover:border-[#FF8C00] transition-all cursor-pointer group">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center group-hover:bg-[#FF8C00] transition-colors">
                        <Icon className="w-8 h-8 text-[#0B4A6B]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0B4A6B] mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B4A6B] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para seu próximo projeto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contate-nos para conhecer como podemos ajudar sua empresa com soluções integradas em infraestrutura.
          </p>
          <Link href="/contato">
            <button className="bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Solicitar Orçamento
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
