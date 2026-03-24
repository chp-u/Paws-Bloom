export default function Hero() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[520px] md:min-h-[640px] lg:min-h-[760px] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=adorable%20fluffy%20white%20Maltese%20dog%20sitting%20on%20professional%20pet%20grooming%20table%20in%20bright%20nordic%20style%20pet%20salon%2C%20natural%20sunlight%20through%20large%20windows%2C%20sage%20green%20walls%20with%20pastel%20pink%20accents%2C%20clean%20grooming%20tools%20arranged%20neatly%2C%20cozy%20warm%20inviting%20atmosphere%2C%20shallow%20depth%20of%20field%20with%20dog%20in%20focus%2C%20photorealistic%20high%20quality%20photography&width=1400&height=760&seq=pet-hero-001&orientation=landscape"
          alt="トリミング中の可愛いわんちゃん"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-24 md:py-32">
        <div className="max-w-xl">
          {/* Paw print decorative element */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-6 flex items-center justify-center text-[#C8D5B9]">
              <i className="ri-footprint-fill text-xl"></i>
            </span>
            <span className="w-4 h-4 flex items-center justify-center text-[#F4E4E0]">
              <i className="ri-footprint-fill text-base"></i>
            </span>
            <span className="w-3 h-3 flex items-center justify-center text-[#C8D5B9]/50">
              <i className="ri-footprint-fill text-sm"></i>
            </span>
          </div>

          {/* Sub badge */}
          <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-[#C8D5B9] text-[#5A6C57] text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-shield-check-line text-[#C8D5B9]"></i>
            </span>
            完全予約制 &nbsp;/&nbsp; 駐車場1台あり &nbsp;/&nbsp; JKC公認トリマー在籍
          </div>

          {/* Main Catchcopy */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E2E] leading-relaxed md:leading-relaxed tracking-wide mb-6">
            わんちゃんの体調に合わせた、<br className="hidden sm:block" />
            負担の少ないトリミング。<br />
            丁寧なカウンセリングから始めます。
          </h1>

          {/* Decorative line */}
          <div className="flex mb-8">
            <div className="w-16 h-0.5 bg-[#F4E4E0] rounded-full" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <a
              href="tel:0X0-XXXX-XXXX"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#C8D5B9] hover:bg-[#b5c5a5] text-[#2C3E2E] font-bold text-base px-8 py-4 rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line"></i>
              </span>
              お電話でのご予約
            </a>
            <button
              onClick={() => handleScrollTo("#services")}
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/85 hover:bg-white border border-[#C8D5B9] text-[#5A6C57] font-semibold text-base px-8 py-4 rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-down-line"></i>
              </span>
              サービスを見る
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
