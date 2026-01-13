import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="py-32 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 pt-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-snug">
              <span className="text-bronze-accent">Introduction.</span><br />
              강남 달토 하이퍼블릭을<br />
              가격 기준으로 보면<br />
              이런 구조입니다.
            </h2>
            
            <div className="space-y-8 text-lg text-gray-300 font-normal leading-relaxed">
              <p>
                강남에서 술자리를 알아보는 분들 중 상당수는
                이미 텐프로, 쩜오 같은 업종을 한 번쯤 경험해봤거나
                아니면 가격 부담 때문에 망설이다가 하이퍼블릭을 찾는 경우가 많습니다.
              </p>
              <p>
                <strong className="text-white">강남 달토는 이 두 가지 사이에서 고민하는 분들이 가장 많이 선택하는 구조입니다.</strong>
              </p>
              <p>
                달토, 달리는토끼, 런닝레빗으로 불리는 이 업종은
                출근율이 높고, 룸이 많고, 초이스가 수월한 구조를 기반으로
                가격 부담을 상대적으로 낮춘 하이퍼블릭입니다.
              </p>
              <p>
                텐이나 쩜오처럼 처음부터 비용이 크게 들어가는 구조는 아니지만,
                그에 비해 사이즈와 마인드가 크게 아쉽지 않은 선으로 운영됩니다.
              </p>
              <div className="pl-6 border-l border-bronze-accent py-2">
                <p className="text-white italic">
                  “비싼 데 한 번 가느냐”보다는<br />
                  “합리적인 비용으로 만족도를 꾸준히 가져가느냐”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 mt-12">
                <img src="/images/강남 달토 문6 2번.jpg" alt="Interior 1" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="p-6 bg-bronze-900">
                    <p className="text-bronze-accent text-sm tracking-widest uppercase mb-2">Since 2020</p>
                    <p className="text-white font-serif text-xl">Legacy</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="p-6 bg-[#1a1a1a]">
                    <p className="text-gray-400 text-sm tracking-widest uppercase mb-2">Location</p>
                    <p className="text-white font-serif text-xl">Gangnam</p>
                </div>
                <img src="/images/강남 달토 문6 3번.jpg" alt="Interior 2" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>

        </div>

        {/* Part 2: Greetings */}
        <div className="mt-40 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-3xl font-serif text-white mb-8">가격 이야기부터 솔직하게 드리는 이유</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    "여기 가격대가 어느 정도냐", "달리는토끼면 많이 비싼 거 아니냐"<br />
                    이 질문 자체가 이미 이전 경험에서 오는 부담이라는 걸 잘 알고 있습니다.<br /><br />
                    그래서 강남 달토에서는 분위기나 말로 끌기보다는 <strong className="text-white">가격 구조부터 설명하는 쪽</strong>을 선택합니다.<br />
                    싸다고 말하지 않습니다. 대신 이 비용으로 이 정도 구조면 납득할 수 있는지를 먼저 판단하게 해드립니다.<br /><br />
                    <span className="text-bronze-accent">이게 맞지 않으면 굳이 진행할 이유도 없다고 생각합니다.</span>
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
