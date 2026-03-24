const blocks = [
  {
    icon: "ri-sanitizer-line",
    title: "器具の衛生管理",
    desc: "使用するハサミ・バリカン・ブラシ等の器具は、施術ごとに消毒液による洗浄と専用の紫外線消毒器での滅菌処理を行っています。タオル・ケープ類は毎回洗濯・乾燥したものを使用します。",
    points: ["施術ごとの器具消毒・滅菌処理", "タオル・ケープは毎回新しいものを使用", "サロン内の定期的な清掃・換気"],
  },
  {
    icon: "ri-heart-pulse-line",
    title: "わんちゃんへの個別配慮",
    desc: "初回および毎回の施術前に、健康状態・持病・アレルギーの有無をお伺いするカウンセリングを実施しています。高齢犬や持病のあるわんちゃんに対しては、施術時間の調整や段階的なアプローチで負担を軽減します。",
    points: ["施術前の健康状態ヒアリング", "高齢犬・持病のあるわんちゃんへの施術時間調整", "アレルギー対応シャンプーの使用相談可"],
  },
  {
    icon: "ri-award-line",
    title: "トリマーの資格と経験",
    desc: "在籍トリマーはJKC（ジャパンケネルクラブ）公認トリマーの資格を保有しています。定期的な技術研修に参加し、最新の施術技術と知識を維持しています。",
    points: ["JKC公認トリマー資格保有", "定期的な技術研修への参加", "多犬種への対応実績"],
  },
  {
    icon: "ri-leaf-line",
    title: "使用製品について",
    desc: "シャンプー・コンディショナーは犬専用の低刺激処方のものを使用しています。皮膚トラブルのあるわんちゃんには、獣医師推奨の薬用シャンプーへの変更についてもご相談ください。",
    points: ["犬専用低刺激シャンプー使用", "薬用シャンプーへの変更対応（要相談）", "香料・着色料不使用製品の使用"],
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="w-full bg-white py-16 md:py-24"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#C8D5B9] uppercase mb-2">Facilities &amp; Safety</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2E]">設備と安全への取り組み</h2>
          <p className="mt-3 text-sm text-[#5A6C57]">わんちゃんが安心して施術を受けられる環境づくりに取り組んでいます。</p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-2/5 flex flex-col gap-3">
            <div className="rounded-xl overflow-hidden" style={{ height: "200px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=small%20fluffy%20dog%20standing%20calmly%20on%20stainless%20steel%20professional%20pet%20grooming%20table%20in%20clean%20bright%20pet%20salon%2C%20groomer%20carefully%20trimming%20dog%20fur%20with%20professional%20scissors%2C%20organized%20pet%20grooming%20tools%2C%20UV%20sterilizer%20box%20visible%20on%20shelf%2C%20sage%20green%20and%20white%20nordic%20interior%2C%20warm%20natural%20window%20light%2C%20photorealistic&width=600&height=280&seq=fac-dog-001&orientation=landscape"
                alt="トリミング台でのわんちゃん施術"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ height: "160px" }}>
              <img
                src="https://readdy.ai/api/search-image?query=close%20up%20of%20clean%20organized%20professional%20pet%20grooming%20tools%20on%20white%20table%20in%20bright%20pet%20salon%2C%20scissors%20combs%20brushes%20nail%20clippers%20neatly%20arranged%2C%20UV%20sterilizer%20device%2C%20antiseptic%20spray%20bottles%2C%20hygienic%20minimal%20nordic%20style%2C%20no%20people%2C%20soft%20natural%20light%2C%20photorealistic&width=600&height=220&seq=fac-tools-002&orientation=landscape"
                alt="衛生管理された器具一覧"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blocks.map((block) => (
              <div key={block.title} className="bg-[#C8D5B9]/10 rounded-xl p-5 border border-[#C8D5B9]/30">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-[#C8D5B9]/40 rounded-full">
                    <i className={`${block.icon} text-[#5A6C57] text-base`}></i>
                  </span>
                  <h3 className="font-bold text-[#2C3E2E] text-sm">{block.title}</h3>
                </div>
                <p className="text-xs text-[#5A6C57] leading-relaxed mb-3">{block.desc}</p>
                <ul className="space-y-1.5">
                  {block.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-[#5A6C57]">
                      <span className="w-3 h-3 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <i className="ri-checkbox-blank-circle-fill text-[#C8D5B9] text-xs"></i>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
