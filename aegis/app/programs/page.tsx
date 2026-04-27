import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/data/programs";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Программы",
  description: "Четыре программы Sparta для разных целей: похудение, сила, рельеф, индивидуальное сопровождение.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Программы</div>
        <h1 className="font-display text-text max-w-3xl">
          Четыре пути под <span className="text-accent">четыре цели</span>
        </h1>
        <p className="mt-8 text-text-muted text-lg max-w-2xl leading-relaxed">
          Каждая программа — это инженерный план под конкретный результат.
          Никакой универсальности, никаких «универсальных схем».
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line">
          {programs.map((p) => (
            <article key={p.id} className="card bg-bg p-10 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <div className="mono-label text-accent">{p.tag}</div>
                <div className="mono-label text-text-dim">{p.duration}</div>
              </div>
              <h2 className="font-display text-3xl text-text mb-6">{p.name}</h2>

              <div className="space-y-6 mb-10">
                <div>
                  <div className="mono-label text-text-dim text-[10px] mb-2">
                    Для кого
                  </div>
                  <p className="text-text-muted text-sm">{p.forWhom}</p>
                </div>
                <div>
                  <div className="mono-label text-text-dim text-[10px] mb-2">
                    Цель
                  </div>
                  <p className="text-text-muted text-sm">{p.goal}</p>
                </div>
              </div>

              <div className="mb-10">
                <div className="mono-label text-text-dim text-[10px] mb-4">
                  Включено
                </div>
                <ul className="space-y-3">
                  {p.includes.map((item) => (
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

              <div className="border-t border-line pt-8 mb-8">
                <div className="mono-label text-text-dim text-[10px] mb-2">
                  Результат
                </div>
                <p className="text-text text-base">{p.result}</p>
              </div>

              <Link href="/contact" className="btn btn-primary w-full">
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-line text-center">
        <p className="text-text-muted mb-6 max-w-xl mx-auto">
          Не уверены, какая программа подходит? На разборе подберём вариант под
          вашу цель и образ жизни.
        </p>
        <Link href="/contact" className="btn btn-ghost">
          Записаться на разбор
        </Link>
      </section>
    </>
  );
}
