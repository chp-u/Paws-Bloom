const shampooItems = [
  { size: "超小型犬（〜5kg）", price: "¥4,400", note: "シャンプー・ブロー・爪切り・耳掃除含む" },
  { size: "小型犬（5〜10kg）", price: "¥5,500", note: "シャンプー・ブロー・爪切り・耳掃除含む" },
  { size: "中型犬（10〜20kg）", price: "¥7,700", note: "シャンプー・ブロー・爪切り・耳掃除含む" },
  { size: "大型犬（20kg〜）", price: "¥11,000〜", note: "犬種・毛量により変動あり。事前にご確認ください" },
];

const trimmingItems = [
  { size: "超小型犬（〜5kg）", price: "¥8,800", note: "シャンプー・カット・ブロー・爪切り・耳掃除含む" },
  { size: "小型犬（5〜10kg）", price: "¥11,000", note: "シャンプー・カット・ブロー・爪切り・耳掃除含む" },
  { size: "中型犬（10〜20kg）", price: "¥14,300", note: "シャンプー・カット・ブロー・爪切り・耳掃除含む" },
  { size: "大型犬（20kg〜）", price: "¥19,800〜", note: "犬種・毛量により変動あり。事前にご確認ください" },
];

const options = [
  { name: "爪切り単体", price: "¥550", icon: "ri-scissors-cut-line" },
  { name: "耳掃除単体", price: "¥550", icon: "ri-ear-line" },
  { name: "肛門腺絞り", price: "¥330", icon: "ri-first-aid-kit-line" },
  { name: "歯ブラシ", price: "¥550", icon: "ri-brush-3-line" },
  { name: "足裏バリカン", price: "¥660", icon: "ri-footprint-line" },
  { name: "顔まわりカット", price: "¥1,100〜", icon: "ri-scissors-2-line" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#FDF8F6] py-16 md:py-24"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#C8D5B9] uppercase mb-2">Services &amp; Pricing</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2E]">サービスと料金</h2>
          <p className="mt-3 text-sm text-[#5A6C57]">料金はすべて税込価格です。犬種・毛量によって変動する場合があります。</p>
        </div>

        {/* Dog images strip */}
        <div className="grid grid-cols-3 gap-3 mb-10 rounded-2xl overflow-hidden">
          <div className="w-full h-36 md:h-48 overflow-hidden rounded-xl">
            <img
              src="https://readdy.ai/api/search-image?query=cute%20fluffy%20Pomeranian%20dog%20freshly%20groomed%20with%20rounded%20puffy%20fur%20cut%2C%20sitting%20on%20white%20background%2C%20pastel%20sage%20green%20ribbon%2C%20clean%20and%20adorable%2C%20studio%20photography%20style%2C%20soft%20natural%20light%2C%20photorealistic&width=400&height=300&seq=dog-svc-001&orientation=portrait"
              alt="トリミング後のポメラニアン"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full h-36 md:h-48 overflow-hidden rounded-xl">
            <img
              src="https://readdy.ai/api/search-image?query=adorable%20white%20Bichon%20Frise%20dog%20being%20gently%20bathed%20in%20pet%20salon%20stainless%20steel%20tub%2C%20lots%20of%20fluffy%20bubbles%20and%20foam%2C%20happy%20expression%2C%20bright%20clean%20nordic%20interior%2C%20soft%20pastel%20tones%2C%20photorealistic%20professional%20photography&width=400&height=300&seq=dog-svc-002&orientation=portrait"
              alt="シャンプー中のビションフリーゼ"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full h-36 md:h-48 overflow-hidden rounded-xl">
            <img
              src="https://readdy.ai/api/search-image?query=cute%20Toy%20Poodle%20dog%20with%20freshly%20trimmed%20neat%20round%20head%20sitting%20on%20grooming%20table%2C%20professional%20groomer%20hands%20gently%20scissors%20trimming%2C%20bright%20clean%20pet%20salon%20background%2C%20natural%20window%20light%2C%20sage%20green%20accents%2C%20photorealistic&width=400&height=300&seq=dog-svc-003&orientation=portrait"
            alt="トリミング中のトイプードル"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Shampoo Card */}
          <div className="bg-white rounded-xl border border-[#E8DDD3] overflow-hidden">
            <div className="bg-[#F4E4E0] px-6 py-4 flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
                <i className="ri-bubble-chart-line text-[#C8A89A] text-lg"></i>
              </span>
              <div>
                <h3 className="font-bold text-[#2C3E2E] text-base">シャンプーコース</h3>
                <p className="text-xs text-[#5A6C57]">シャンプー・ブロー・耳掃除・爪切りセット</p>
              </div>
            </div>
            <div className="divide-y divide-[#F4E4E0]">
              {shampooItems.map((item) => (
                <div key={item.size} className="px-6 py-3.5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#2C3E2E]">{item.size}</p>
                    <p className="text-xs text-[#5A6C57] mt-0.5 leading-relaxed">{item.note}</p>
                  </div>
                  <span className="text-base font-bold text-[#5A6C57] whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trimming Card */}
          <div className="bg-white rounded-xl border border-[#E8DDD3] overflow-hidden">
            <div className="bg-[#C8D5B9]/30 px-6 py-4 flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
                <i className="ri-scissors-2-line text-[#5A6C57] text-lg"></i>
              </span>
              <div>
                <h3 className="font-bold text-[#2C3E2E] text-base">トリミングコース</h3>
                <p className="text-xs text-[#5A6C57]">シャンプー・カット・ブロー・耳掃除・爪切りセット</p>
              </div>
            </div>
            <div className="divide-y divide-[#F4E4E0]">
              {trimmingItems.map((item) => (
                <div key={item.size} className="px-6 py-3.5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#2C3E2E]">{item.size}</p>
                    <p className="text-xs text-[#5A6C57] mt-0.5 leading-relaxed">{item.note}</p>
                  </div>
                  <span className="text-base font-bold text-[#5A6C57] whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="bg-[#E8DDD3]/60 rounded-xl px-6 py-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center">
              <i className="ri-add-circle-line text-[#5A6C57]"></i>
            </span>
            <h3 className="font-bold text-[#2C3E2E] text-base">オプションメニュー</h3>
          </div>
          <div className="divide-y divide-[#E8DDD3]">
            {options.map((opt) => (
              <div key={opt.name} className="bg-white first:rounded-t-lg last:rounded-b-lg px-4 py-3 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-[#FDF8F6] rounded-full">
                  <i className={`${opt.icon} text-[#C8A89A] text-sm`}></i>
                </span>
                <span className="flex-1 text-sm text-[#2C3E2E]">{opt.name}</span>
                <span className="text-sm font-bold text-[#5A6C57] whitespace-nowrap">{opt.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5A6C57] mt-4">※ オプションはコースとの組み合わせ、または単体でのご利用が可能です。</p>
        </div>
      </div>
    </section>
  );
}
