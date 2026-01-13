import { motion } from 'framer-motion';

const reasons = [
  {
    num: "01",
    title: "High Attendance",
    korTitle: "압도적인 출근율",
    desc: "하루 평균 150명~200명 수준의 출근율이 유지되기 때문에 선택 폭이 넓습니다. 선택 폭이 넓다는 건 괜히 애매한 상황에서 타협하지 않아도 된다는 뜻입니다."
  },
  {
    num: "02",
    title: "Room Capacity",
    korTitle: "여유로운 룸 수",
    desc: "룸 개수가 많아 손님이 몰리는 시간대에도 대기 때문에 흐름이 끊기는 경우가 적습니다. 쾌적한 환경에서 바로 시작할 수 있습니다."
  },
  {
    num: "03",
    title: "Choice System",
    korTitle: "합리적 초이스 구조",
    desc: "몇 명 보고 끝나는 구조가 아니라 여러 조를 충분히 보고 선택할 수 있기 때문에 '이 가격에 이 정도면 괜찮다'는 판단이 나옵니다."
  }
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="mb-24 md:flex justify-between items-end border-b border-white/10 pb-10">
          <div>
            <span className="text-bronze-accent font-bold tracking-widest text-sm uppercase block mb-4">Why Dalto?</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              강남 달토 하이퍼블릭이<br />
              <span className="text-gray-500">가성비가 나오는 이유</span>
            </h2>
          </div>
          <p className="text-gray-400 mt-6 md:mt-0 max-w-md text-right">
            이 세 가지가 맞물리면서 강남 달토는<br />
            가격 대비 만족도가 유지되는 구조를 만들고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-charcoal p-10 border border-white/5 hover:border-bronze-accent/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-8xl text-white group-hover:opacity-20 transition-opacity">
                {item.num}
              </div>
              
              <div className="relative z-10 pt-10">
                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                <h4 className="text-bronze-accent font-bold text-lg mb-6">{item.korTitle}</h4>
                <p className="text-gray-300 leading-relaxed font-normal">
                    {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Full Width Image Banner */}
        <div className="mt-20 w-full h-[400px] overflow-hidden relative">
            <img src="/images/강남 달토 문6 4번.jpg" alt="System Mood" className="w-full h-full object-cover grayscale opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-serif text-3xl md:text-5xl italic text-center">
                    "Structure makes Difference."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
