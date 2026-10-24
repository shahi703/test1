export default function Courses() {
  const courses = [
    {
      title: 'جزوه آموزش تعمیر ولوهای صنعتی',
      category: 'تجهیزات مکانیکال',
      price: '350,000',
      originalPrice: '750,000',
      discount: 53,
      badge: 'پرفروش',
      badgeColor: 'bg-red-500',
    },
    {
      title: 'آموزش استانداردها و چالش‌های پروژه',
      category: 'استاندارد و ترجمه',
      price: '395,000',
      originalPrice: '750,000',
      discount: 47,
      badge: 'ویژه',
      badgeColor: 'bg-amber-500',
    },
    {
      title: 'جزوه آموزش ابزار دقیق',
      category: 'ابزاردقیق',
      price: '390,000',
      originalPrice: '790,000',
      discount: 51,
      badge: 'جدید',
      badgeColor: 'bg-green-500',
    },
    {
      title: 'جزوه پایپلاین | خط لوله',
      category: 'پایپینگ - پایپلاین',
      price: '250,000',
      originalPrice: '550,000',
      discount: 55,
      badge: 'تخفیف ویژه',
      badgeColor: 'bg-blue-500',
    },
    {
      title: 'پکیج آموزش طراحی پایپینگ',
      category: 'پایپینگ - پایپلاین',
      price: '980,000',
      originalPrice: '',
      discount: 0,
      badge: 'حرفه‌ای',
      badgeColor: 'bg-purple-500',
    },
    {
      title: 'جزوه آموزشی جامع رنگ و عایق',
      category: 'رنگ و عایق',
      price: '399,000',
      originalPrice: '699,000',
      discount: 43,
      badge: 'محبوب',
      badgeColor: 'bg-pink-500',
    },
  ];

  return (
    <section id="courses" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            دوره‌ها و محصولات
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4">
            جدیدترین <span className="gradient-text">دوره‌های آموزشی</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            جزوات و دوره‌های تخصصی مطابق استانداردهای بین‌المللی
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              {/* Course Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                <div className="text-center">
                  <svg className="w-16 h-16 text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-blue-400 text-sm font-medium">صنعت آکادمی</span>
                </div>
                {course.badge && (
                  <span className={`absolute top-4 right-4 ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {course.badge}
                  </span>
                )}
                {course.discount > 0 && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    ٪{course.discount} تخفیف
                  </span>
                )}
              </div>

              {/* Course Info */}
              <div className="p-5">
                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-md">
                  {course.category}
                </span>
                <h3 className="font-bold text-slate-800 mt-3 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-blue-600">{course.price}</span>
                    <span className="text-xs text-blue-600">تومان</span>
                  </div>
                  {course.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://sanatacademic.ir/shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-900 transition-all"
          >
            مشاهده همه دوره‌ها
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
