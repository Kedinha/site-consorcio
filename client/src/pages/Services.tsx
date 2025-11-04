import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Shovel, Truck, Zap } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Construção Civil',
      description: 'Soluções completas em construção de infraestrutura',
      items: [
        'Construção de rodovias e vias',
        'Construção de ferrovias',
        'Construção de túneis',
        'Obras de mineração',
        'Edificações comerciais e industriais',
        'Obras de infraestrutura urbana',
      ],
    },
    {
      icon: Shovel,
      title: 'Terraplenagem',
      description: 'Serviços especializados de movimentação de terra',
      items: [
        'Serviços de movimentação de terra',
        'Escavação e corte de terrenos',
        'Aterros e compactação de solo',
        'Drenagem e obras de contenção',
        'Preparação de terrenos para construção',
        'Terraplenagem para rodovias e ferrovias',
        'Obras geotécnicas',
        'Desmatamento e limpeza de áreas',
      ],
    },
    {
      icon: Truck,
      title: 'Transporte e Locações',
      description: 'Frota moderna de equipamentos para locação',
      items: [
        'Caminhões caçamba',
        'Tratores de esteira',
        'Motoniveladoras (patrol)',
        'Caminhões Munck (com guindaste)',
        'Vans e caminhonetes',
        'Guindastes móveis',
        'Caminhões basculantes',
        'Carretas pranchas',
      ],
    },
  ];

  const equipment = {
    terraplenagem: [
      'Escavadeiras hidráulicas',
      'Tratores de esteira',
      'Motoniveladoras (patrol)',
      'Pás carregadeiras',
      'Caminhões caçamba',
      'Caminhão pipa',
      'Rolos compactadores',
    ],
    transporte: [
      'Caminhões basculantes (caçamba)',
      'Caminhões Munck (com guindaste)',
      'Carretas pranchas',
      'Caminhões comboio',
      'Caminhões pipa',
      'Veículos de apoio',
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B4A6B] to-[#0D5A7B] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-200">
            Soluções integradas em construção, terraplenagem e locações
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#00D4FF] rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B4A6B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#FF8C00] font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-12 text-center">
            Nossos Equipamentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Terraplenagem Equipment */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#00D4FF]">
              <div className="flex items-center mb-6">
                <Shovel className="w-8 h-8 text-[#FF8C00] mr-3" />
                <h3 className="text-2xl font-bold text-[#0B4A6B]">
                  Equipamentos de Terraplenagem
                </h3>
              </div>
              <ul className="space-y-3">
                {equipment.terraplenagem.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport Equipment */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <div className="flex items-center mb-6">
                <Truck className="w-8 h-8 text-[#00D4FF] mr-3" />
                <h3 className="text-2xl font-bold text-[#0B4A6B]">
                  Equipamentos de Transporte
                </h3>
              </div>
              <ul className="space-y-3">
                {equipment.transporte.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consortium Companies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-12 text-center">
            Empresas Consorciadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#0B4A6B] to-[#0D5A7B] text-white p-8 rounded-lg text-center">
              <p className="text-5xl font-bold text-[#FF8C00] mb-2">40%</p>
              <h3 className="text-xl font-bold mb-2">Newtron Terraplanagem</h3>
              <p className="text-gray-200 text-sm">Líder do Consórcio</p>
            </div>
            <div className="bg-gradient-to-br from-[#FF8C00] to-[#FFB84D] text-white p-8 rounded-lg text-center">
              <p className="text-5xl font-bold text-[#0B4A6B] mb-2">20%</p>
              <h3 className="text-xl font-bold mb-2">DACS Construções</h3>
              <p className="text-gray-900 text-sm">Especializada em Construção Civil</p>
            </div>
            <div className="bg-gradient-to-br from-[#00D4FF] to-[#00E8FF] text-[#0B4A6B] p-8 rounded-lg text-center">
              <p className="text-5xl font-bold mb-2">40%</p>
              <h3 className="text-xl font-bold mb-2">RPM Serviços</h3>
              <p className="text-gray-700 text-sm">Locações e Terraplenagem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and Safety */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0B4A6B] mb-6 flex items-center gap-3">
                <span className="text-[#FF8C00] text-3xl">🛡️</span>
                Segurança em Primeiro Lugar
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#FF8C00] font-bold">✓</span>
                  <span>Cumprimento rigoroso das Normas Regulamentadoras</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF8C00] font-bold">✓</span>
                  <span>Treinamentos periódicos em segurança do trabalho</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF8C00] font-bold">✓</span>
                  <span>EPIs e EPCs adequados e de qualidade</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF8C00] font-bold">✓</span>
                  <span>CIPA e SESMT atuantes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FF8C00] font-bold">✓</span>
                  <span>Inspeções regulares de equipamentos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0B4A6B] mb-6 flex items-center gap-3">
                <span className="text-[#00D4FF] text-3xl">♻️</span>
                Sustentabilidade e Responsabilidade
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                  <span>Gestão adequada de resíduos de construção</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                  <span>Minimização de impactos ambientais</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                  <span>Uso racional de recursos naturais</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                  <span>Programas de reflorestamento e compensação ambiental</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00D4FF] font-bold">✓</span>
                  <span>Responsabilidade social e geração de empregos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
