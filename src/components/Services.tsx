export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'طراحی دیتابیس',
      description: 'طراحی و پیاده‌سازی دیتابیس‌های حرفه‌ای برای انواع پروژه‌های صنعتی و اداری',
      highlight: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'اتوماسیون اداری',
      description: 'ساخت سیستم‌های اتوماسیون اداری تحت وب و آفلاین برای سازمان‌ها',
      highlight: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'آموزش پایپینگ',
      description: 'جزوات و دوره‌های تخصصی پایپینگ و پایپلاین مطابق استانداردهای بین‌المللی',
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'ابزاردقیق صنعتی',
      description: 'آموزش جامع ابزار دقیق از مقدماتی تا پیشرفته با مثال‌های عملی',
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'ترجمه استانداردها',
      description: 'ترجمه حرفه‌ای استانداردهای فنی و مهندسی معتبر بین‌المللی به فارسی',
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'مخازن ذخیره',
      description: 'آموزش طراحی و محاسبات مخازن ذخیره و تحت فشار مطابق API و ASME',
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            خدمات ما
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4">
            خدمات تخصصی <span className="gradient-text">صنعت آکادمی</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            مجموعه‌ای کامل از خدمات آموزشی و فنی مهندسی برای حرفه‌ای‌ها
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card group relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                service.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-600/20'
                  : 'bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full">
                  ویژه
                </div>
              )}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                service.highlight
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
              }`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-slate-800'}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${service.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                {service.description}
              </p>
              <div className={`mt-5 flex items-center gap-2 text-sm font-medium ${
                service.highlight ? 'text-amber-300' : 'text-blue-600'
              }`}>
                <span>اطلاعات بیشتر</span>
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
