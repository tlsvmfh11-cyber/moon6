import { useState, useEffect } from 'react';
import { Menu, X, Phone, Send } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '소개', href: '#intro' },
    { name: '시스템', href: '#system' },
    { name: '가격', href: '#pricing' },
    { name: '후기', href: '#reviews' },
    { name: '문의', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-charcoal/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-widest text-bronze-accent">
          DALTO<span className="text-white text-xs align-top ml-1">EST.2026</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-400 hover:text-bronze-accent transition-colors text-sm uppercase tracking-widest font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-bronze-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="h-4 w-[1px] bg-white/20" />
          <a href="https://t.me/hscompanyshs" target="_blank" className="text-gray-400 hover:text-[#0088cc] transition-colors">
            <Send size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-charcoal border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xl font-serif text-center text-gray-300 hover:text-bronze-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center gap-6 pt-6 border-t border-white/5">
                <a href="tel:01023033778" className="flex items-center gap-2 text-white">
                    <Phone size={18} /> 전화
                </a>
                <a href="https://t.me/hscompanyshs" target="_blank" className="flex items-center gap-2 text-[#0088cc]">
                    <Send size={18} /> 텔레그램
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
