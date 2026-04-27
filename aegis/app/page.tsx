import Link from "next/link";
import { brand } from "@/data/brand";
import { programs } from "@/data/programs";
import { metrics } from "@/data/metrics";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/animation/Reveal";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <div className="mono-label text-text-muted mb-8">{brand.slogan}</div>
          <h1 className="display font-display text-text">
            Дисциплина <br />
            <span className="text-accent">сильнее</span> мотивации.
          </h1>
          <p className="mt-10 text-lg text-text-muted max-w-2xl leading-relaxed">
            {brand.description}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">
              Начать путь <ArrowRight size={16} />
            </Link>
            <Link href="/method" className="btn btn-ghost">
              Метод
            </Link>
          </div>
        </div>

        {/* Floating mono labels */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-line pt-10">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="metric-value font-display text-4xl text-text">
                {m.value}
                <span className="text-accent">{m.suffix}</span>
              </div>
              <div className="mono-label text-text-dim mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs preview */}
      <section className="border-t border-line bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="mono-label text-text-muted mb-4">01 / Программы</div>
              <h2 className="font-display text-text max-w-xl">
                Четыре пути под четыре цели
              </h2>
            </div>
            <Link href="/programs" className="hidden md:inline-flex btn-link">
              Все программы →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i} className="card p-10 bg-bg">
                <div className="mono-label text-accent mb-6">{p.tag}</div>
                <h3 className="font-display text-2xl text-text mb-4">{p.name}</h3>
                <p className="text-text-muted text-sm mb-8">{p.forWhom}</p>
                <div className="text-xs text-text-dim mb-8 mono-label">
                  {p.duration}
                </div>
                <Link href="/programs" className="btn-link">
                  Подробнее →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method teaser */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mono-label text-text-muted mb-4">02 / Метод</div>
            <h2 className="font-display text-text">
              Архитектура, а не <span className="text-accent">мотивация</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-text-muted text-lg leading-relaxed">
              Методика основана на пяти принципах: точность, измеримость,
              последовательность, ответственность и долгосрочность. Никакого
              «чудо-протокола», только инженерный подход к телу и привычкам.
            </p>
            <Link href="/method" className="btn-link mt-8 inline-block">
              Изучить метод →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="border-t border-line bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mono-label text-text-muted mb-12">03 / Результаты</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="card bg-bg p-10">
                <div className="flex gap-6 mb-6">
                  <div>
                    <div className="font-display text-2xl text-accent">
                      {t.metrics.weight}
                    </div>
                    <div className="mono-label text-text-dim text-[10px]">
                      масса
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl text-accent">
                      {t.metrics.bodyFat}
                    </div>
                    <div className="mono-label text-text-dim text-[10px]">
                      жир
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl text-accent">
                      {t.metrics.strength}
                    </div>
                    <div className="mono-label text-text-dim text-[10px]">
                      сила
                    </div>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  «{t.text}»
                </p>
                <div className="text-xs text-text-dim">
                  {t.name}, {t.age} — {t.role}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/results" className="btn-link">
              Все истории →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-line text-center">
        <h2 className="font-display text-text max-w-2xl mx-auto">
          Готовы строить систему,<br />
          <span className="text-accent">а не искать мотивацию?</span>
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
