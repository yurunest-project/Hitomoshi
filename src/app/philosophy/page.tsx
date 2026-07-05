import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "企業理念 | ひともし",
  description:
    "ひともしの経営理念・企業理念・ビジョン・行動指針。微かな一歩を価値に変え、誰もが安心できる居場所を社会に実装します。",
};

function PhilosophySection({
  label,
  titleJa,
  titleEn,
  children,
}: {
  label: string;
  titleJa: string;
  titleEn: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-navy/8 py-10 last:border-b-0 sm:py-12">
      <p className="mb-2 text-sm font-medium tracking-widest text-lantern">
        {label}
      </p>
      <h2 className="text-xl font-semibold leading-relaxed text-navy sm:text-2xl">
        {titleJa}
        <span className="mt-1 block text-sm font-normal text-navy-muted sm:text-base">
          {titleEn}
        </span>
      </h2>
      <div className="mt-6 space-y-4 text-base leading-[2] text-navy-muted sm:text-lg">
        {children}
      </div>
    </section>
  );
}

const values = [
  {
    title: "行動が生む変革を信じる",
    subtitle: "Action & Energy",
    body: "完全な回復を待つのではなく、小さな一歩を踏み出すことで人は内側から変わっていけます。誰もがリスクなく最初のアクションを起こせる、安全な挑戦の場（プラットフォーム）を提供し続けます。",
  },
  {
    title: "葛藤から紡がれる「本物の優しさ」",
    subtitle: "Empathy as a Value",
    body: "孤独や痛みに向き合ってきた等身大の経験こそが、誰かの心を真に温める最高の価値になると確信しています。形式的な対話ではなく、傷ついた経験があるからこそ深く共感できる「ありのままの優しさ」で、一人ひとりに寄り添います。",
  },
  {
    title: "誠実なインフラと、利他精神の徹底",
    subtitle: "Integrity & Altruism",
    body: "関わるすべての人が何のリスクも背負うことなく、安心して一歩を踏み出せるセキュアなシステムを構築します。私たちは純粋な利他の精神（非営利）を持ち、その環境を責任を持って管理・維持し続けます。",
  },
] as const;

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-navy/8 bg-white/60 px-5 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-medium tracking-[0.2em] text-lantern">
            PHILOSOPHY
          </p>
          <h1 className="text-2xl font-semibold leading-relaxed text-navy sm:text-3xl">
            企業理念
            <span className="mt-2 block text-base font-normal text-navy-muted sm:text-lg">
              Corporate Philosophy
            </span>
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="rounded-3xl border border-navy/8 bg-white/80 p-6 sm:p-10">
          <PhilosophySection
            label="CORE PRINCIPLE"
            titleJa="経営理念"
            titleEn="Core Principle"
          >
            <p>
              全従業員の幸福を追求すると同時に、人類・社会の進歩発展に貢献する。
            </p>
          </PhilosophySection>

          <PhilosophySection
            label="MISSION"
            titleJa="企業理念"
            titleEn="Corporate Mission"
          >
            <p>
              微かな一歩を価値に変え、誰もが「安心」できる居場所を社会に実装する。
            </p>
            <p>
              生きづらさを抱える人々の「変わりたい」という微かな意思と行動を全肯定し、社会との温かい接点を創造します。働くスタッフの物心両面の幸福を原点とし、誰もが排除されることなく、優しさが循環する持続可能な社会の実現に貢献します。
            </p>
          </PhilosophySection>

          <PhilosophySection
            label="VISION"
            titleJa="目指す未来"
            titleEn="Vision"
          >
            <p>
              「最前線でがんばる人」も「これから歩み出す人」も、互いに灯し合える世界へ。
            </p>
            <p>
              社会を支え、懸命に生きる人々の努力を心からリスペクトし、応援します。同時に、それぞれのペースで社会と繋がり直したいと願う人々の選択肢も、同じように尊重されるべきだと私は考えます。
              自社プロダクトを通じて、ある時は誰かの灯りとなり、ある時は誰かに甘えられる、そんな「優しい支え合い」が当たり前になる未来を目指します。
            </p>
          </PhilosophySection>

          <PhilosophySection
            label="VALUE"
            titleJa="行動指針"
            titleEn="Value"
          >
            <ol className="space-y-8" role="list">
              {values.map((value, index) => (
                <li key={value.title}>
                  <h3 className="text-base font-semibold text-navy sm:text-lg">
                    <span className="mr-2 text-lantern">{index + 1}.</span>
                    {value.title}
                    <span className="mt-1 block text-sm font-normal text-navy-muted">
                      {value.subtitle}
                    </span>
                  </h3>
                  <p className="mt-3 leading-[2]">{value.body}</p>
                </li>
              ))}
            </ol>
          </PhilosophySection>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
