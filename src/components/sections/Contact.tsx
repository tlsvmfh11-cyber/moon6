import { motion } from 'framer-motion';
import { Phone, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-charcoal relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="/images/강남 달토 문6 5번.jpg" alt="Contact BG" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal mix-blend-multiply" />
        </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="text-bronze-accent font-bold tracking-widest uppercase text-sm mb-6 block">
                Reservation & Inquiry
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10">
                픽업 서비스 · 예약 안내
            </h2>
            
            <p className="text-xl text-gray-200 font-medium mb-12 leading-relaxed">
                강남 달토는 가격 문의만 주셔도 괜찮습니다.<br />
                굳이 예약을 바로 하지 않으셔도 됩니다.
            </p>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-2xl mx-auto mb-16">
                <p className="text-gray-400 mb-6">
                    오늘 기준 가격 / 지금 시간대 상황 / 대략적인 분위기
                </p>
                <p className="text-white text-lg">
                    이 정도만 물어보셔도 있는 그대로 안내드립니다.<br />
                    <span className="text-bronze-accent font-bold">맞지 않으면 진행 안 하셔도 됩니다.</span>
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="tel:01023033778" className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-charcoal font-bold text-lg hover:bg-gray-200 transition-colors min-w-[240px]">
                    <Phone size={20} /> 전화 문의
                </a>
                <a href="sms:01023033778" className="flex items-center justify-center gap-3 px-8 py-5 bg-[#333] text-white font-bold text-lg hover:bg-[#444] transition-colors min-w-[240px]">
                    <MessageSquare size={20} /> 문자 문의
                </a>
                <a href="https://t.me/hscompanyshs" target="_blank" className="flex items-center justify-center gap-3 px-8 py-5 bg-[#0088cc] text-white font-bold text-lg hover:bg-[#0077b3] transition-colors min-w-[240px]">
                    <Send size={20} /> 텔레그램
                </a>
            </div>

            {/* 마무리 */}
            <div className="mt-20 pt-10 border-t border-white/10">
                <h3 className="text-2xl font-serif text-white mb-6">마무리</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    강남 달토 하이퍼블릭은<br />
                    <span className="text-bronze-accent font-bold">가격으로 속이는 구조가 아닙니다.</span>
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                    출근율, 초이스, 구조<br />
                    이 세 가지를 놓고 봤을 때<br />
                    이 정도면 납득 가능하냐를 기준으로 운영합니다.
                </p>
                <p className="text-gray-500">
                    비교해보고 결정하셔도 됩니다.<br />
                    그게 강남 달토가 생각하는 정상적인 선택입니다.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
