import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="flex-1 flex items-center justify-center py-32">
        <div className="container text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[#0B4A6B] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A6B] mb-4">
            Página não encontrada
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Link href="/">
            <button className="bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Voltar à Home
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
