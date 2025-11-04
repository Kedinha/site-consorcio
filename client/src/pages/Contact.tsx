import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B4A6B] to-[#0D5A7B] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-200">
            Estamos prontos para ajudar com seu próximo projeto
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-[#00D4FF] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#0B4A6B]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B4A6B] mb-3">
                Endereço
              </h3>
              <p className="text-gray-700">
                Rua Itarare 111 Q42, I andar Sala 01<br />
                Bairro Ipiranga<br />
                Goiânia - GO<br />
                CEP: 74.453-150
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#FF8C00] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B4A6B] mb-3">
                Telefone
              </h3>
              <p className="text-gray-700">
                Entre em contato conosco<br />
                para maiores informações<br />
                sobre nossos serviços
              </p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#0B4A6B] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#0B4A6B] rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B4A6B] mb-3">
                Email
              </h3>
              <p className="text-gray-700">
                Envie-nos uma mensagem<br />\n                e entraremos em contato<br />\n                em breve
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#0B4A6B] mb-6">
              Envie-nos uma Mensagem
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0B4A6B] mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C00]"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0B4A6B] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C00]"
                    placeholder="seu.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0B4A6B] mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C00]"
                    placeholder="(11) 9999-9999"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#0B4A6B] mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C00]"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="construcao">Construção Civil</option>
                    <option value="terraplenagem">Terraplenagem</option>
                    <option value="locacao">Locação de Equipamentos</option>
                    <option value="orcamento">Solicitação de Orçamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0B4A6B] mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C00]"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-8 text-center">
            Localização
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.2845877631526!2d-49.32724472561875!3d-16.662636444931863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef44d4aa5a2c1%3A0xc86414a0aacd02bf!2sR.%20Itarar%C3%A9%2C%20111%20-%20Ipiranga%2C%20Goi%C3%A2nia%20-%20GO%2C%2074453-150%2C%20Brazil!5e0!3m2!1sen!2sus!4v1762199206879!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
