import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Phone, MessageSquare, Send } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import System from './components/sections/System';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import { useProtection } from './hooks/use-protection';

function App() {
  useProtection();

  return (
    <HelmetProvider>
      <div className="bg-charcoal min-h-screen text-white selection:bg-bronze-accent selection:text-white font-sans">
        <Helmet>
          <title>강남 달토 후기 최저가 | 달리는토끼 가성비 구조</title>
          <meta name="description" content="강남 달토는 달리는토끼·런닝레빗 하이퍼블릭 업종으로, 출근율과 초이스 폭 대비 가격 부담이 낮은 구조를 운영합니다. 실제 현장 기준으로 가성비를 설명합니다." />
          <meta name="keywords" content="강남달토, 달리는토끼, 런닝레빗, 강남하이퍼블릭, 강남달토후기, 강남달토가격, 강남가라오케" />
          <link rel="canonical" href="https://moon6.example.com" />
        </Helmet>

        <Navbar />

        <main>
          <Hero />
          <Intro />
          <System />
          <Pricing />
          <Reviews />
          <Contact />
        </main>

        <Footer />

        {/* Mobile Floating Action Buttons */}
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-white/10">
          <a
            href="tel:01023033778"
            className="flex-1 bg-[#1a1a1a]/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 active:bg-bronze-accent transition-colors"
          >
            <Phone size={18} />
            전화
          </a>
          <a
            href="sms:01023033778"
            className="flex-1 bg-[#1a1a1a]/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 active:bg-bronze-accent transition-colors"
          >
            <MessageSquare size={18} />
            문자
          </a>
          <a
            href="https://t.me/hscompanyshs"
            target="_blank"
            className="flex-1 bg-[#0088cc]/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-sm active:bg-[#0077b3] transition-colors"
          >
            <Send size={18} />
            텔레그램
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;