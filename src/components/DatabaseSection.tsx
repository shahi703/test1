export default function DatabaseSection() {
  const features = [
    {
      title: 'تحلیل و طراحی دیتابیس',
      description: 'تحلیل نیازمندی‌ها و طراحی مدل مفهومی، منطقی و فیزیکی دیتابیس',
      icon: '🔍',
    },
    {
      title: 'طراحی جداول و روابط',
      description: 'طراحی حرفه‌ای جداول، کلیدهای اصلی و خارجی، نرمال‌سازی',
      icon: '📊',
    },
    {
      title: 'SQL Server & PostgreSQL',
      description: 'پیاده‌سازی با موتورهای قدرتمند دیتابیس برای عملکرد بالا',
      icon: '⚡',
    },
    {
      title: 'بهینه‌سازی و ایندکس',
      description: 'بهینه‌سازی کوئری‌ها، طراحی ایندکس و افزایش سرعت عملکرد',
      icon: '🚀',
    },
    {
      title: 'امنیت داده‌ها',
      description: 'پیاده‌سازی لایه‌های امنیتی، بکاپ‌گیری و بازیابی اطلاعات',
      icon: '🔒',
    },
    {
      title: 'مستندسازی کامل',
      description: 'ارائه مستندات کامل ERD، دیکشنری داده و راهنمای استفاده',
      icon: '📋',
    },
  ];

  return (
    <section id="database" className="py-20 lg:py-32 database-pattern relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-5 py-2.5 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="font-bold text-sm">خدمات ویژه و تخصصی</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-800 mb-6">
            طراحی و ساخت <span className="gradient-text">دیتابیس</span> حرفه‌ای
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            ما در صنعت آکادمی با سال‌ها تجربه در طراحی و پیاده‌سازی دیتابیس‌های صنعتی و اداری، 
            آماده ارائه خدمات تخصصی طراحی دیتابیس برای کسب و کار شما هستیم. 
            از تحلیل نیازمندی‌ها تا پیاده‌سازی و بهینه‌سازی، تمام مراحل را با بالاترین کیفیت انجام می‌دهیم.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs text-slate-400 mr-4 font-mono">database-design.sql</span>
              </div>
              <div className="font-mono text-sm space-y-2 bg-slate-50 rounded-2xl p-6 overflow-x-auto" dir="ltr">
                <p className="text-blue-600">-- طراحی دیتابیس اتوماسیون اداری</p>
                <p className="text-purple-600">CREATE TABLE</p> <p className="text-green-600">employees</p> <p>(</p>
                <p className="text-slate-600 pl-4">id <span className="text-blue-500">INT PRIMARY KEY</span>,</p>
                <p className="text-slate-600 pl-4">first_name <span className="text-blue-500">VARCHAR(50)</span>,</p>
                <p className="text-slate-600 pl-4">last_name <span className="text-blue-500">VARCHAR(50)</span>,</p>
                <p className="text-slate-600 pl-4">department_id <span className="text-blue-500">INT</span>,</p>
                <p className="text-slate-600 pl-4">position <span className="text-blue-500">VARCHAR(100)</span>,</p>
                <p className="text-slate-600 pl-4">hire_date <span className="text-blue-500">DATE</span>,</p>
                <p className="text-slate-600 pl-4">status <span className="text-blue-500">ENUM</span>(<span className="text-amber-600">'active'</span>, <span className="text-amber-600">'inactive'</span>)</p>
                <p className="text-slate-600">);</p>
                <p className="mt-4 text-blue-600">-- ارتباط جداول</p>
                <p className="text-purple-600">ALTER TABLE</p> <p className="text-green-600">employees</p>
                <p className="text-slate-600 pl-4"><span className="text-blue-500">ADD FOREIGN KEY</span> (department_id)</p>
                <p className="text-slate-600 pl-4"><span className="text-blue-500">REFERENCES</span> departments(id);</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2 space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-600/25"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            درخواست مشاوره رایگان طراحی دیتابیس
          </a>
        </div>
      </div>
    </section>
  );
}
