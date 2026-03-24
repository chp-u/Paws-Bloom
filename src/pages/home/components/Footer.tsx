export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#2C3E2E] py-10"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src="https://public.readdy.ai/ai/img_res/47f9166b-4a48-4136-bbff-7f10207ce107.png"
              alt="Paws & Bloom ロゴ"
              className="h-8 w-8 object-contain rounded-full opacity-90"
            />
            <div>
              <p className="font-bold text-white text-base">Paws &amp; Bloom</p>
              <p className="text-xs text-[#C8D5B9] mt-0.5">ペットサロン・トリミングショップ</p>
            </div>
          </div>

          {/* Center: Quick Info */}
          <div className="text-center md:text-left">
            <p className="text-xs text-[#C8D5B9] leading-relaxed">
              〒000-0000 東京都◯◯区◯◯町1-2-3<br />
              TEL: 0X0-XXXX-XXXX　営業時間: 10:00〜18:00<br />
              定休日: 水曜日・年末年始
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4 text-xs text-[#C8D5B9]">
            <a href="#" className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">プライバシーポリシー</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">特定商取引法に基づく表記</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-[#C8D5B9]/60">&copy; {year} Paws &amp; Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
