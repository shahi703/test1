export default function Blog() {
  const posts = [
    {
      title: 'ازبیلت آیزومتریک پایپینگ | آموزش و قوانین As-Built',
      excerpt: 'آموزش کامل نقشه‌های ازبیلت آیزومتریک در پایپینگ و قوانین مربوط به آن',
      category: 'پایپینگ',
      date: '۱۴۰۴',
    },
    {
      title: 'محاسبه وزن لوله و ساپورت | ماشین حساب آنلاین',
      excerpt: 'ماشین حساب آنلاین محاسبه‌گر وزن پایپینگ و ساپورت برای مهندسین',
      category: 'محاسبات',
      date: '۱۴۰۴',
    },
    {
      title: 'پرکاربردترین استانداردهای نفت و گاز',
      excerpt: 'به چه استانداردی باید مراجعه کنم؟ راهنمای جامع استانداردهای نفت و گاز',
      category: 'استاندارد',
      date: '۱۴۰۴',
    },
    {
      title: 'دستورالعمل اسید شویی پایپینگ',
      excerpt: 'آموزش کامل دستورالعمل اسیدشویی پایپینگ استنلس استیل و کربن استیل',
      category: 'پایپینگ',
      date: '۱۴۰۵',
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            وبلاگ آموزشی
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4">
            آخرین <span className="gradient-text">مقالات آموزشی</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            مقالات تخصصی و آموزشی در حوزه نفت، گاز و صنایع فنی مهندسی
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="group flex gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="https://sanatacademic.ir/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            مشاهده همه مقالات
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
