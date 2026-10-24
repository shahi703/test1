import { useState } from 'react';

interface HeaderProps {
  scrollY: number;
}

export default function Header({ scrollY }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'خانه', href: '#hero' },
    { label: 'خدمات', href: '#services' },
    { label: 'دیتابیس', href: '#database' },
    { label: 'اتوماسیون', href: '#automation' },
    { label: 'دوره‌ها', href: '#courses' },
    { label: 'وبلاگ', href: '#blog' },
    { label: 'تماس', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h1 className={`font-bold text-lg lg:text-xl ${scrollY > 50 ? 'text-slate-800' : 'text-white'}`}>
                صنعت آکادمی
              </h1>
              <p className={`text-xs ${scrollY > 50 ? 'text-slate-500' : 'text-blue-200'}`}>
                SanatAcademic.ir
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrollY > 50
                    ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://sanatacademic.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/25"
            >
              ورود به سایت
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrollY > 50 ? 'text-slate-700' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl p-4 mt-2 border border-slate-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://sanatacademic.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-medium"
            >
              ورود به سایت اصلی
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
