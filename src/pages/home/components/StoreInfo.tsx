const storeInfo = [
  {
    icon: "ri-map-pin-2-line",
    label: "住所",
    value: "〒000-0000 東京都◯◯区◯◯町1-2-3",
    link: null,
  },
  {
    icon: "ri-phone-line",
    label: "電話番号",
    value: "0X0-XXXX-XXXX",
    link: "tel:0X0-XXXX-XXXX",
  },
  {
    icon: "ri-time-line",
    label: "営業時間",
    value: "10:00 〜 18:00（最終受付 17:00）",
    link: null,
  },
  {
    icon: "ri-calendar-close-line",
    label: "定休日",
    value: "水曜日・年末年始",
    link: null,
  },
  {
    icon: "ri-car-line",
    label: "駐車場",
    value: "1台（店舗前）",
    link: null,
  },
  {
    icon: "ri-calendar-check-line",
    label: "ご予約",
    value: "完全予約制（当日予約はお電話にてご確認ください）",
    link: null,
  },
];

export default function StoreInfo() {
  return (
    <section
      id="store"
      className="w-full bg-[#E8DDD3]/40 py-16 md:py-24"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#C8D5B9] uppercase mb-2">Store Info &amp; Access</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2E]">店舗情報・アクセス</h2>
        </div>

        {/* Layout: stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Store Info Card */}
          <div className="w-full lg:w-2/5 bg-white rounded-xl border border-[#E8DDD3] p-6">
            <h3 className="font-bold text-[#2C3E2E] text-base mb-5 pb-4 border-b border-[#E8DDD3]">
              Paws &amp; Bloom
            </h3>
            <div className="space-y-4">
              {storeInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-[#C8D5B9]/20 rounded-lg flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-[#5A6C57] text-sm`}></i>
                  </span>
                  <div>
                    <p className="text-xs text-[#5A6C57] mb-0.5">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm font-semibold text-[#2C3E2E] hover:text-[#5A6C57] transition-colors cursor-pointer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#2C3E2E] leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-3/5 rounded-xl overflow-hidden border border-[#C8D5B9]/50" style={{ minHeight: "320px" }}>
            <iframe
              title="店舗地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12962.843476506432!2d139.6917064!3d35.6894875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8514e0ef3f7d0!2z5riL6LC35Yy65p2-!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
