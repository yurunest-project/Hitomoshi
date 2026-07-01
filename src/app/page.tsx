/* ── データ ── */

const CONTACT_EMAIL = "hitomoshi.official@gmail.com";

const services = [
  {
    id: "yurunest",
    name: "ゆるネスト",
    nameEn: "yurunest",
    description:
      "夜眠れない人と、お家から一歩を踏み出したい人を繋ぐ安眠基地。ブラウザで完結する1対1の通話サービス。",
    href: "https://yurunest.vercel.app",
    buttonLabel: "yurunest（ゆるネスト）を訪ねる",
  },
] as const;

const collectedInfo = [
  "氏名、アカウント名、ニックネーム",
  "メールアドレス",
  "決済に関する情報（決済会社を通じて処理される情報）",
  "お問い合わせ内容、サービス利用時の通信ログ",
] as const;

const usagePurposes = [
  "本サービスにおけるユーザー認証およびサービスの提供（通話のマッチング、予約管理等）",
  "サービス購入等の決済手続きおよび確認",
  "サービスに関する重要なお知らせ、規約変更等の通知",
  "お客様からのクレーム、お問い合わせへの対応",
] as const;

const thirdPartyExceptions = [
  "お客様の同意がある場合",
  "決済手続きのために、決済代行会社（Stripe等）に情報の確認を行う場合",
  "法令に基づき、裁判所や警察等の公的機関から開示を求められた場合",
] as const;

const tokushohoRows = [
  { label: "事業者名", value: "ひともし（代表：佐野 未夕）" },
  {
    label: "住所",
    value: "〒1700013 東京都豊島区東池袋2丁目62番8号BIGオフィスプラザ池袋1206",
  },
  {
    label: "連絡先",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "販売価格",
    value: "各サービス（ゆるネスト等）のページに表示された金額に準ずる",
  },
  {
    label: "代金の支払方法",
    value: "クレジットカード決済（Stripe）",
  },
  {
    label: "引渡時期",
    value: "予約完了後、指定の日時にてサービス（通話）を提供",
  },
  {
    label: "返品・交換・返金",
    value:
      "各サービスの返金規約（全額返金保証等）に基づき、決済の取消処理を行います",
  },
] as const;

/* ── サブコンポーネント ── */

function CelestialOrnaments() {
  return (
    <div
      className="pointer-events-none relative mx-auto mb-10 flex h-28 w-full max-w-xs items-center justify-center sm:h-32 sm:max-w-sm"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sol/25 via-lantern-soft/20 to-luna/30 blur-2xl" />
      <div className="absolute left-[18%] h-16 w-16 rounded-full bg-gradient-to-br from-sol to-lantern/80 shadow-[0_0_32px_rgba(230,160,85,0.35)] sm:h-20 sm:w-20" />
      <div className="absolute right-[18%] h-14 w-14 rounded-full bg-gradient-to-br from-luna to-white shadow-[0_0_24px_rgba(200,212,232,0.6)] sm:h-[4.5rem] sm:w-[4.5rem]" />
      <div className="absolute h-3 w-3 rounded-full bg-lantern shadow-[0_0_16px_rgba(230,160,85,0.8)]" />
    </div>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <article className="flex flex-col rounded-3xl border border-navy/8 bg-white/80 p-7 shadow-sm backdrop-blur-sm sm:p-8">
      <p className="mb-2 text-sm font-medium tracking-widest text-lantern">
        SERVICE
      </p>
      <h3 className="text-xl font-semibold text-navy sm:text-2xl">
        {service.name}
        <span className="mt-1 block text-base font-normal text-navy-muted">
          {service.nameEn}
        </span>
      </h3>
      <p className="mt-4 flex-1 text-base leading-[1.9] text-navy-muted">
        {service.description}
      </p>
      <a
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-lantern px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-lantern/90 sm:text-base"
      >
        {service.buttonLabel}
      </a>
    </article>
  );
}

function PolicyArticle({
  article,
  title,
  children,
}: {
  article: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-navy/8 py-7 last:border-b-0">
      <h3 className="mb-4 text-base font-semibold text-navy sm:text-lg">
        <span className="mr-2 text-lantern">{article}</span>
        {title}
      </h3>
      <div className="space-y-4 text-sm leading-[1.95] text-navy-muted sm:text-base">
        {children}
      </div>
    </section>
  );
}

function PolicyList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 border-l-2 border-lantern/30 pl-4" role="list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="rounded-3xl border border-navy/8 bg-white/80 p-6 sm:p-10">
      <PolicyArticle article="第1条" title="（総則）">
        <p>
          当方は、本サービスを提供するにあたり、お客様の個人情報の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）を遵守するとともに、以下の通りプライバシーポリシーを定め、その適切な管理・保護に努めます。
        </p>
      </PolicyArticle>

      <PolicyArticle article="第2条" title="（個人情報の取得）">
        <p>
          当方は、サービスのご利用、会員登録、お問い合わせの際に、以下の個人情報を適法かつ公正な手段によって取得いたします。
        </p>
        <PolicyList items={collectedInfo} />
      </PolicyArticle>

      <PolicyArticle article="第3条" title="（個人情報の利用目的）">
        <p>
          取得した個人情報は、以下の目的の範囲内でのみ利用し、お客様の同意なく目的外の利用はいたしません。
        </p>
        <PolicyList items={usagePurposes} />
      </PolicyArticle>

      <PolicyArticle article="第4条" title="（個人情報の第三者提供の禁止）">
        <p>
          当方は、取得した個人情報を適切に管理し、次のいずれかに該当する場合を除き、第三者に開示・提供いたしません。
        </p>
        <PolicyList items={thirdPartyExceptions} />
      </PolicyArticle>

      <PolicyArticle article="第5条" title="（個人情報の安全管理）">
        <p>
          当方は、個人情報の漏洩、滅失、または毀損の防止その他の安全管理のために、セキュリティ対策を講じ、厳重に管理を行います。また、本サービス内で発生した通話内容（音声データ等）を、当方が不正に録音・録画・保持することはありません。
        </p>
      </PolicyArticle>

      <PolicyArticle
        article="第6条"
        title="（個人情報の開示・訂正・利用停止、お問い合わせ窓口および管理責任者）"
      >
        <p>
          お客様がご自身の個人情報の開示、訂正、利用停止などを希望される場合は、ご本人であることを確認の上、速やかに対応いたします。
        </p>
        <p>
          <strong className="font-medium text-navy">管理責任者：</strong>
          運営代表（佐野）
        </p>
        <p>
          当方の個人情報の取り扱いに関するお問い合わせは、
          <a
            href="#tokushoho"
            className="mx-1 text-lantern underline-offset-4 hover:underline"
          >
            特定商取引法に基づく表記
          </a>
          に記載の連絡先（
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-lantern underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          等）までご連絡ください。
        </p>
      </PolicyArticle>
    </div>
  );
}

function TokushohoTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy/8 bg-white/80">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] text-left text-sm sm:text-base">
          <tbody>
            {tokushohoRows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-navy/8 last:border-b-0"
              >
                <th
                  scope="row"
                  className="w-[34%] align-top bg-dawn/60 px-5 py-4 font-medium text-navy sm:w-[28%] sm:px-6 sm:py-5"
                >
                  {row.label}
                </th>
                <td className="px-5 py-4 leading-relaxed text-navy-muted sm:px-6 sm:py-5">
                  {"href" in row && row.href ? (
                    <a
                      href={row.href}
                      className="text-lantern underline-offset-4 hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                  {"note" in row && row.note ? (
                    <p className="mt-2 text-xs leading-relaxed text-navy-muted/80 sm:text-sm">
                    </p>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── メインページ ── */

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ① ヒーロー */}
      <header className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(230,160,85,0.08)_0%,_transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <CelestialOrnaments />
          <p className="mb-3 text-sm font-medium tracking-[0.35em] text-lantern">
            HITOMOSHI
          </p>
          <h1 className="text-4xl font-semibold tracking-wide text-navy sm:text-5xl">
            ひともし
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-[2] text-navy-muted sm:text-lg">
            人の心に、ぽっと優しい灯火をともす。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        {/* ② サービス一覧 */}
        <section aria-labelledby="services-heading" className="mb-20 sm:mb-24">
          <div className="mb-8 text-center sm:mb-10">
            <p className="mb-2 text-sm font-medium tracking-widest text-lantern">
              SERVICES
            </p>
            <h2
              id="services-heading"
              className="text-2xl font-semibold text-navy sm:text-3xl"
            >
              事業・サービス
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-muted sm:text-base">
              ひともしが育てる、心に寄り添うサービスたち。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* ③ プライバシーポリシー */}
        <section
          id="privacy"
          aria-labelledby="privacy-heading"
          className="mb-20 scroll-mt-8 sm:mb-24"
        >
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium tracking-widest text-lantern">
              PRIVACY
            </p>
            <h2
              id="privacy-heading"
              className="text-2xl font-semibold text-navy sm:text-3xl"
            >
              プライバシーポリシー
              <span className="mt-1 block text-base font-normal text-navy-muted sm:text-lg">
                （個人情報保護方針）
              </span>
            </h2>
          </div>
          <PrivacyPolicyContent />
        </section>

        {/* ④ 特定商取引法に基づく表記 */}
        <section
          id="tokushoho"
          aria-labelledby="tokushoho-heading"
          className="mb-16 scroll-mt-8"
        >
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium tracking-widest text-lantern">
              LEGAL
            </p>
            <h2
              id="tokushoho-heading"
              className="text-2xl font-semibold text-navy sm:text-3xl"
            >
              特定商取引法に基づく表記
            </h2>
          </div>
          <TokushohoTable />
        </section>
      </main>

      {/* ⑤ フッター */}
      <footer className="border-t border-navy/8 bg-white/50 px-5 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-navy-muted">
          <p>運営：ひともし（代表：佐野）</p>
          <nav
            className="mt-4 text-base text-navy"
            aria-label="法務情報へのリンク"
          >
            <span aria-hidden="true">📄 </span>
            <a
              href="#privacy"
              className="font-medium text-lantern underline-offset-4 hover:underline"
            >
              プライバシーポリシー
            </a>
            <span className="mx-2 text-navy-muted" aria-hidden="true">
              ｜
            </span>
            <a
              href="#tokushoho"
              className="font-medium text-lantern underline-offset-4 hover:underline"
            >
              特定商取引法に基づく表記
            </a>
          </nav>
          <p className="mt-4">
            © 2026 hitomoshi. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
