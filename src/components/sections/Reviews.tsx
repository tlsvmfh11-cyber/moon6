import { motion } from 'framer-motion';

const reviews = [
    {
        text: "예전에 쩜오 다니다가 부담돼서 달토로 왔는데 가격 대비 만족도는 훨씬 나았습니다.",
        type: "Switch"
    },
    {
        text: "달리는토끼가 비쌀 줄 알았는데 구조를 알고 나니 납득이 됐습니다.",
        type: "First Time"
    },
    {
        text: "출근 인원이 많아서 초이스가 편했고, 이 가격이면 충분하다고 느꼈습니다.",
        type: "Satisfaction"
    },
    {
        text: "싸다고는 못 하지만, 이 정도면 다시 올 생각은 듭니다.",
        type: "Revisit"
    }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-[#121212] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
            
            <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-serif text-white mb-6">Clients<br />Feedback</h2>
                <div className="w-16 h-1 bg-bronze-accent mb-8" />
                <p className="text-gray-400 leading-relaxed">
                    가격 기준으로 본<br />
                    실제 이용자들의 솔직한 후기 4가지.
                </p>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#1a1a1a] p-8 hover:bg-[#222] transition-colors"
                    >
                        <div className="text-bronze-accent text-xs font-bold tracking-widest uppercase mb-4">
                            {review.type}
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            "{review.text}"
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}
