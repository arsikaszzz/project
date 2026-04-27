import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers } from "@/data/pricing";
import { faq } from "@/data/faq";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Тарифы",
  description: "Три тарифа сопровождения AEGIS: Start, Pro, Elite.",
};

export default function PricingPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Тарифы</div>
        <h1 className="font-display text-text max-w-3xl">
          Уровень сопровождения <span className="text-accent">под цель</span>
        </h1>
        <p className="mt-8 text-text-muted text-lg max-w-2xl leading-relaxed">
          Цена не за «месяц тренировок», а за систему: программу, корректировки,
          поддержку, ответственность.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
          {pricingTiers.map((t) => (
            <article
              key={t.id}
              className={cn(
                "card bg-bg p-10 flex flex-col",
                t.featured && "border-accent-soft"
              )}
            >
              {t.featured && (
                <div className="mono-label text-accent text-[10px] mb-6">
                  Рекомендуем
                </div>
              )}
              <div className="mono-label text-text-dim text-[10px] mb-2">
                {t.name}
              </div>
              <div className="font-display text-4xl text-text mb-2">
                {t.price}
                <span className="text-base text-text-dim">{t.period}</span>
              </div>
              <p className="text-text-muted text-sm mb-8">{t.description}</p>

              <div className="space-y-4 text-sm mb-10">
                <div>
                  <div className="mono-label text-text-dim text-[10px] mb-1">
                    Подходит
                  </div>
                  <div className="text-text-muted">{t.suitable}</div>
                </div>
                <div>
                  <div className="mono-label text-text-dim text-[10px] mb-1">
                    Формат
                  </div>
                  <div className="text-text-muted">{t.format}</div>
                </div>
                <div>
                  <div className="mono-label text-text-dim text-[10px] mb-1">
                    Корректировки
                  </div>
                  <div className="text-text-muted">{t.adjustments}</div>
                </div>
              </div>

              <div className="mb-10">
                <div className="mono-label text-text-dim text-[10px] mb-4">
                  Включено
                </div>
                <ul className="space-y-3">
                  {t.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text-muted text-sm"
                    >
                      <Check size={16} className="text-accent mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-text-dim border-t border-line pt-6 mb-8">
                <span className="mono-label text-[10px] block mb-2">
                  Бонус
                </span>
                {t.bonuses}
              </div>

              <Link
                href="/contact"
                className={cn(
                  "btn mt-auto",
                  t.featured ? "btn-primary" : "btn-ghost"
                )}
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 border-t border-line">
        <div className="mono-label text-text-muted mb-12">Частые вопросы</div>
        <div className="divide-y divide-line">
          {faq.map((q) => (
            <details key={q.question} className="group py-6">
              <summary className="cursor-pointer flex items-center justify-between gap-4 list-none">
                <span className="font-display text-xl text-text">
                  {q.question}
                </span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-text-muted leading-relaxed">{q.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
