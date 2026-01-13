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
    <div className="bg-charcoal min-h-screen text-white selection:bg-bronze-accent selection:text-white font-sans">
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
  );
}

export default App;
