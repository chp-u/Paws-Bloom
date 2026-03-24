export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-white py-16 md:py-24"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <div className="max-w-lg mx-auto px-4 sm:px-8 text-center">
        {/* Section Title */}
        <p className="text-xs font-semibold tracking-widest text-[#C8D5B9] uppercase mb-2">Contact</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2E] mb-4">ご予約・お問い合わせ</h2>
        <p className="text-sm text-[#5A6C57] leading-relaxed mb-10">
          ご予約は完全予約制です。お電話またはLINEにてお気軽にお問い合わせください。<br className="hidden sm:block" />
          初めてのご来店の方も、お気軽にご連絡ください。
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0X0-XXXX-XXXX"
            className="flex items-center justify-center gap-3 bg-[#C8D5B9] hover:bg-[#b5c5a5] text-[#2C3E2E] font-bold text-base px-8 py-4 rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-phone-line text-lg"></i>
            </span>
            お電話でのご予約
          </a>
          <a
            href="https://line.me"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#F4E4E0] hover:bg-[#edcfc9] text-[#2C3E2E] font-bold text-base px-8 py-4 rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-chat-smile-2-line text-[#5A6C57] text-lg"></i>
            </span>
            LINEでお問い合わせ
          </a>
        </div>

        {/* Note */}
        <p className="mt-6 text-xs text-[#5A6C57] leading-relaxed">
          営業時間：10:00〜18:00（水曜定休）<br />
          営業時間外のLINEメッセージは翌営業日にご返信いたします。
        </p>
      </div>
    </section>
  );
}
