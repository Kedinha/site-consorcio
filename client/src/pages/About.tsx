import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Compromisso',
      description: 'Cumprimento rigoroso de prazos e especificações contratuais',
    },
    {
      icon: Target,
      title: 'Qualidade',
      description: 'Excelência técnica em todos os serviços prestados',
    },
    {
      icon: Heart,
      title: 'Segurança',
      description: 'Prioridade absoluta à saúde e integridade de colaboradores',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Consórcio Consolidado',
      description: 'União de três empresas especializadas com atuação complementar',
    },
    {
      title: 'Experiência Comprovada',
      description: 'Empresas com anos de atuação no mercado de construção e infraestrutura',
    },
    {
      title: 'Capacidade Técnica e Operacional',
      description: 'Equipe qualificada e equipamentos modernos',
    },
    {
      title: 'Presença Regional Estratégica',
      description: 'Atuação nos estados de Goiás e Tocantins com cobertura nacional',
    },
    {
      title: 'Compromisso com Qualidade e Prazos',
      description: 'Gestão profissional e processos certificados',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B4A6B] to-[#0D5A7B] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl text-gray-200">
            Conheça a história e os valores do Consórcio Potência
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-6">
                Quem Somos
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                O <span className="font-bold text-[#FF8C00]">Consórcio Potência</span> é uma união estratégica de empresas especializadas em construção civil, terraplenagem e locações de equipamentos, formado em <span className="font-bold">1987</span> para atender grandes projetos de infraestrutura no Brasil.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Combinamos expertise técnica, equipamentos de última geração e equipes altamente qualificadas para entregar soluções completas e integradas em obras de grande porte.
              </p>
              <p className="text-gray-700 text-lg">
                Com presença em Goiás, Mato Grosso, Mato Grosso do Sul e em todo o Brasil, temos capacidade operacional para atender projetos em qualquer localidade do território nacional.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0B4A6B] to-[#00D4FF] rounded-lg p-8 text-white">
              <div className="space-y-4">
                <div>
                  <p className="text-5xl font-bold text-[#FF8C00]">38+</p>
                  <p className="text-lg">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FF8C00]">3</p>
                  <p className="text-lg">Empresas Consorciadas</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#FF8C00]">4</p>
                  <p className="text-lg">Estados de Atuação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strength Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-6 text-center">
            Nossa Força e Compromissos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <h3 className="text-xl font-bold text-[#0B4A6B] mb-4">
                Capacidade Integrada
              </h3>
              <p className="text-gray-700">
                Nossa força está na soma das capacidades técnicas, operacionais e financeiras das empresas consorciadas, permitindo executar projetos complexos com excelência e eficiência.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#00D4FF]">
              <h3 className="text-xl font-bold text-[#0B4A6B] mb-4">
                Responsabilidade Total
              </h3>
              <p className="text-gray-700">
                Atuamos com compromisso total com a sustentabilidade, segurança do trabalho e responsabilidade socioambiental em todas as nossas operações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#0B4A6B] to-[#0D5A7B] text-white p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-[#FF8C00] mr-3" />
                <h3 className="text-2xl font-bold">Visão</h3>
              </div>
              <p className="text-gray-100">
                Consolidar-se como referência nacional em soluções integradas de construção civil, terraplenagem e locações, destacando-se pela qualidade, inovação tecnológica e sustentabilidade em grandes projetos de infraestrutura.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF8C00] to-[#FFB84D] text-white p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#0B4A6B] mr-3" />
                <h3 className="text-2xl font-bold">Missão</h3>
              </div>
              <p className="text-gray-900">
                Fornecer serviços de excelência em construção, terraplenagem e locações de equipamentos, garantindo a satisfação dos clientes através de soluções técnicas eficientes, segurança operacional e responsabilidade socioambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-12 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-[#FF8C00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B4A6B] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-12 text-center">
            Por que somos a empresa ideal para o seu projeto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#FF8C00] text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B4A6B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
