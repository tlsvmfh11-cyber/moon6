export default function Footer() {
    return (
      <footer className="bg-[#0f0f0f] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-bronze-accent mb-2">DALTO COMPANY</h2>
            <p className="text-gray-500 text-sm">
              강남 달토 | 달리는토끼 | 런닝레빗 하이퍼블릭<br />
              High-End Private Lounge in Gangnam
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} DALTO. All rights reserved.
        </div>
      </footer>
    );
  }
