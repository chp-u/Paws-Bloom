import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "サービス・料金", href: "#services" },
    { label: "設備・安全管理", href: "#facilities" },
    { label: "店舗情報", href: "#store" },
    { label: "ご予約", href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm border-b border-[#C8D5B9]/40" : "bg-transparent"
        }`}
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo + Salon Name */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img
              src="https://public.readdy.ai/ai/img_res/47f9166b-4a48-4136-bbff-7f10207ce107.png"
              alt="ペットサロンロゴ"
              className="h-9 w-9 object-contain rounded-full"
            />
            <span
              className={`font-bold text-base md:text-lg tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#2C3E2E]" : "text-[#2C3E2E]"
              }`}
            >
              Paws &amp; Bloom
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-[#5A6C57] hover:text-[#2C3E2E] transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0X0-XXXX-XXXX"
              className="flex items-center gap-1.5 bg-[#C8D5B9] text-[#2C3E2E] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#b5c5a5] transition-colors duration-200 whitespace-nowrap"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-sm"></i>
              </span>
              0X0-XXXX-XXXX
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#2C3E2E] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span className="w-6 h-6 flex items-center justify-center">
              <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#E8DDD3]/95" onClick={() => setMenuOpen(false)} />
        <div className="absolute top-16 left-0 right-0 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-xl font-medium text-[#2C3E2E] border-b border-[#C8D5B9] pb-4 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0X0-XXXX-XXXX"
            className="flex items-center justify-center gap-2 bg-[#C8D5B9] text-[#2C3E2E] font-bold text-base px-6 py-4 rounded-full mt-2 whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-phone-line"></i>
            </span>
            0X0-XXXX-XXXX
          </a>
        </div>
      </div>
    </>
  );
}
