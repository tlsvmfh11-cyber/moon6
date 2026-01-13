import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-charcoal relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Price Structure</h2>
            <p className="text-xl text-gray-300 font-normal">
                강남 달토 가격을 이해하는 핵심 키워드
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <motion.div 
                className="space-y-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <p className="text-lg text-gray-300 leading-relaxed">
                    강남 달토 가격은 요일, 시간대, 상황에 따라 달라질 수 있습니다.
                    그래서 숫자를 고정해서 적어두지 않습니다. <br /><br />
                    <strong className="text-white text-xl">중요한 건 구조입니다.</strong>
                </p>

                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 bg-bronze-accent mt-2.5 rounded-full" />
                        <div>
                            <p className="text-white font-bold text-lg">초기 비용 부담 감소</p>
                            <p className="text-gray-500 text-sm">텐·쩜오처럼 시작 비용이 큰 구조가 아닙니다.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 bg-bronze-accent mt-2.5 rounded-full" />
                        <div>
                            <p className="text-white font-bold text-lg">퀄리티 유지</p>
                            <p className="text-gray-500 text-sm">그렇다고 너무 낮은 기준으로 운영하지도 않습니다.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 bg-bronze-accent mt-2.5 rounded-full" />
                        <div>
                            <p className="text-white font-bold text-lg">투명한 정산</p>
                            <p className="text-gray-500 text-sm">설명 없이 추가되는 비용은 일절 없습니다.</p>
                        </div>
                    </li>
                </ul>
            </motion.div>

            {/* Right: Visual Card */}
            <motion.div 
                className="bg-[#151515] p-10 border border-white/5 text-center relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bronze-accent to-transparent" />
                
                <h3 className="text-2xl font-serif text-white mb-2">Value Proposition</h3>
                <p className="text-gray-500 text-sm mb-10">강남 달토의 약속</p>

                <div className="py-8 border-y border-white/5">
                    <p className="text-gray-300 text-lg italic mb-2">"싸니까 간다"가 아닌</p>
                    <p className="text-2xl font-bold text-bronze-accent">"이 정도면 충분히 괜찮다"</p>
                </div>

                <p className="text-gray-400 text-sm mt-8 leading-relaxed">
                    그래서 한 번 오고 끝나는 경우보다<br />
                    다시 찾는 경우가 많은 편입니다.
                </p>

                <a 
                    href="#contact" 
                    className="block w-full mt-10 py-4 bg-white text-charcoal font-bold hover:bg-gray-200 transition-colors"
                >
                    견적 문의하기
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
