import { useState, useEffect } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    const el = document.getElementById('stats-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 100, suffix: '+', label: 'حوزه تخصصی', icon: '🎯' },
    { number: 100, suffix: '+', label: 'عنوان آموزشی', icon: '📚' },
    { number: 1000, suffix: '+', label: 'دانشجوی فعال', icon: '👨‍🎓' },
    { number: 1000, suffix: '+', label: 'ساعت آموزش', icon: '⏱️' },
    { number: 10, suffix: '+', label: 'مدرس متخصص', icon: '👨‍🏫' },
    { number: 1000, suffix: '+', label: 'فایل آموزشی', icon: '📁' },
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            آمار و دستاوردهای ما
          </h2>
          <p className="text-blue-100 text-lg">
            اعتماد هزاران دانشجو و متخصص، افتخار ماست
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                {isVisible ? stat.number : 0}{stat.suffix}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
