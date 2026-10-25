export default function Hero() {
  return (
    <section id="hero" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-blue-100 text-sm">مرجع تخصصی آموزش و خدمات فنی مهندسی</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              <span className="block">صنعت</span>
              <span className="block bg-gradient-to-l from-blue-300 to-cyan-300 bg-clip-text text-transparent">آکادمی</span>
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              آموزش، تخصص، مهارت و اشتغال. مرجع تخصصی کتاب، جزوه و ترجمه استانداردهای فنی مهندسی در حوزه نفت و گاز، پالایشگاه و پتروشیمی.
              <span className="block mt-4 text-amber-300 font-medium">
                ✨ متخصص طراحی دیتابیس و اتوماسیون اداری تحت وب و آفلاین
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#database"
                className="group px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-2xl font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                خدمات دیتابیس
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                مشاهده خدمات
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Database Icon */}
              <div className="w-80 h-80 relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        {/* Database SVG */}
                        <ellipse cx="60" cy="30" rx="40" ry="15" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="2"/>
                        <path d="M20 30 v30 c0 8.3 17.9 15 40 15 s40-6.7 40-15 V30" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="2"/>
                        <path d="M20 60 v30 c0 8.3 17.9 15 40 15 s40-6.7 40-15 V60" fill="none" stroke="rgba(147,197,253,0.6)" strokeWidth="2"/>
                        <ellipse cx="60" cy="60" rx="40" ry="15" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="1.5"/>
                        <ellipse cx="60" cy="90" rx="40" ry="15" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="1.5"/>
                        {/* Connection Lines */}
                        <circle cx="60" cy="45" r="3" fill="rgba(251,191,36,0.9)"/>
                        <circle cx="45" cy="70" r="3" fill="rgba(251,191,36,0.9)"/>
                        <circle cx="75" cy="70" r="3" fill="rgba(251,191,36,0.9)"/>
                        <line x1="60" y1="45" x2="45" y2="70" stroke="rgba(251,191,36,0.5)" strokeWidth="1"/>
                        <line x1="60" y1="45" x2="75" y2="70" stroke="rgba(251,191,36,0.5)" strokeWidth="1"/>
                      </svg>
                    </div>
                    <p className="text-blue-200 text-sm font-medium">طراحی دیتابیس حرفه‌ای</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400/20 backdrop-blur-sm rounded-2xl border border-amber-400/30 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400/20 backdrop-blur-sm rounded-2xl border border-cyan-400/30 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {[
            { number: '+۱۰۰', label: 'حوزه تخصصی' },
            { number: '+۱۰۰', label: 'عنوان آموزشی' },
            { number: '+۱۰۰۰', label: 'دانشجو' },
            { number: '+۱۰۰۰', label: 'ساعت آموزش' },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
