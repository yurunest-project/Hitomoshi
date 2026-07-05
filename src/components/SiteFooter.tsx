export function SiteFooter() {
  return (
    <footer className="border-t border-navy/8 bg-white/50 px-5 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-navy-muted">
        <p>運営：ひともし（代表：佐野）</p>
        <nav
          className="mt-4 text-base text-navy"
          aria-label="法務情報へのリンク"
        >
          <a
            href="/#privacy"
            className="font-medium text-lantern underline-offset-4 hover:underline"
          >
            プライバシーポリシー
          </a>
          <span className="mx-2 text-navy-muted" aria-hidden="true">
            ｜
          </span>
          <a
            href="/#tokushoho"
            className="font-medium text-lantern underline-offset-4 hover:underline"
          >
            特定商取引法に基づく表記
          </a>
        </nav>
        <p className="mt-4">© 2026 hitomoshi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
