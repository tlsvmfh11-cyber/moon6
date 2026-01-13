import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-charcoal z-10" />
        <img
          src="/images/hero.jpg"
          alt="강남 달토 하이퍼블릭"
          className="w-full h-full object-cover object-center animate-[scaleIn_20s_ease-out_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-bronze-accent tracking-[0.3em] text-sm md:text-base font-bold mb-6">
            달리는토끼 · 런닝레빗
          </p>

          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            강남 달토 <br />
            <span className="text-bronze-gradient">후기 최저가</span>
          </h1>

          <div className="w-20 h-[1px] bg-bronze-accent mx-auto my-10" />

          <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            달리는토끼·런닝레빗 가성비 구조.<br />
            강남 달토 후기 최저가, 실제 현장 기준으로 설명합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-bronze-accent text-charcoal font-bold text-lg hover:bg-champagne transition-colors duration-300 min-w-[200px]"
            >
              예약 문의
            </a>
            <a
              href="#intro"
              className="px-10 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors duration-300 min-w-[200px]"
            >
              소개 보기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
