import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { metrics } from "@/data/metrics";

export const metadata: Metadata = {
  title: "Результаты",
  description: "Истории клиентов AEGIS: метрики, цифры, реальные изменения.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Результаты</div>
        <h1 className="font-display text-text max-w-3xl">
          Результаты говорят <span className="text-accent">цифрами</span>
        </h1>
        <p className="mt-8 text-text-muted text-lg max-w-2xl leading-relaxed">
          Без «было/стало» по фотошопу. Только метрики: масса, % жира, силовые
          показатели — то, что измеряется и подтверждается.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="metric-value font-display text-5xl text-text">
                {m.value}
                <span className="text-accent">{m.suffix}</span>
              </div>
              <div className="mono-label text-text-dim mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-px bg-line">
          {testimonials.map((t) => (
            <article key={t.id} className="card bg-bg p-10 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <div className="font-display text-2xl text-text">
                    {t.name}
                  </div>
                  <div className="mono-label text-text-dim mt-2">
                    {t.age} · {t.role}
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div>
                      <div className="font-display text-2xl text-accent">
                        {t.metrics.weight}
                      </div>
                      <div className="mono-label text-text-dim text-[10px] mt-1">
                        масса
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-2xl text-accent">
                        {t.metrics.bodyFat}
                      </div>
                      <div className="mono-label text-text-dim text-[10px] mt-1">
                        жир
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-2xl text-accent">
                        {t.metrics.strength}
                      </div>
                      <div className="mono-label text-text-dim text-[10px] mt-1">
                        сила
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-8 text-text-muted leading-relaxed text-lg">
                  «{t.text}»
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-line text-center">
        <h2 className="font-display text-text max-w-2xl mx-auto">
          Хотите быть <span className="text-accent">следующим?</span>
        </h2>
        <div className="mt-10">
          <Link href="/contact" className="btn btn-primary">
            Записаться на разбор
          </Link>
        </div>
      </section>
    </>
  );
}
