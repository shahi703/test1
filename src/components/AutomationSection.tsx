export default function AutomationSection() {
  const capabilities = [
    {
      title: 'اتوماسیون تحت وب',
      description: 'سیستم‌های تحت وب با قابلیت دسترسی از هر مکان و دستگاه',
      features: ['دسترسی از هر مرورگر', 'رابط کاربری مدرن', 'امنیت بالا', 'مقیاس‌پذیری'],
      color: 'blue',
    },
    {
      title: 'اتوماسیون آفلاین',
      description: 'سیستم‌های آفلاین قابل نصب روی شبکه داخلی سازمان',
      features: ['بدون نیاز به اینترنت', 'نصب روی سرور محلی', 'سرعت بالا', 'امنیت حداکثری'],
      color: 'emerald',
    },
    {
      title: 'اتوماسیون هیبریدی',
      description: 'ترکیب سیستم آنلاین و آفلاین با همگام‌سازی هوشمند',
      features: ['همگام‌سازی خودکار', 'کار آفلاین + آنلاین', 'بکاپ ابری', 'انعطاف‌پذیری کامل'],
      color: 'purple',
    },
  ];

  const modules = [
    { name: 'مدیریت کارکنان', icon: '👥' },
    { name: 'حضور و غیاب', icon: '🕐' },
    { name: 'حقوق و دستمزد', icon: '💰' },
    { name: 'مدیریت پروژه', icon: '📁' },
    { name: 'اتوماسیون نامه‌ها', icon: '📨' },
    { name: 'گزارش‌گیری', icon: '📊' },
    { name: 'مدیریت اسناد', icon: '📄' },
    { name: 'مدیریت انبار', icon: '🏭' },
  ];

  return (
    <section id="automation" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full px-5 py-2.5 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-bold text-sm">تخصص ویژه ما</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            اتوماسیون اداری <span className="text-amber-400">تحت وب و آفلاین</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            طراحی و پیاده‌سازی سیستم‌های اتوماسیون اداری سفارشی متناسب با نیاز سازمان شما. 
            چه به دنبال یک سیستم تحت وب باشید یا یک نرم‌افزار آفلاین برای شبکه داخلی، 
            ما راهکار کامل را ارائه می‌دهیم.
          </p>
        </div>

        {/* Automation Types */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {capabilities.map((cap, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                cap.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                cap.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {cap.color === 'blue' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
                  {cap.color === 'emerald' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />}
                  {cap.color === 'purple' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-slate-400 mb-5 leading-relaxed">{cap.description}</p>
              <ul className="space-y-2">
                {cap.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">ماژول‌های قابل پیاده‌سازی</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {modules.map((mod, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <span className="text-2xl">{mod.icon}</span>
                <span className="text-white text-sm font-medium">{mod.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-2xl font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-xl shadow-amber-500/25"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            سفارش سیستم اتوماسیون سفارشی
          </a>
        </div>
      </div>
    </section>
  );
}
