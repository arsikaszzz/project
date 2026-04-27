import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/data/brand";
import { metrics } from "@/data/metrics";

export const metadata: Metadata = {
  title: "Обо мне",
  description: `Тренер ${brand.name}. Метод, путь, философия дисциплины.`,
};

const milestones = [
  { year: "2018", text: "Сертификация NASM. Первые клиенты — друзья и знакомые." },
  { year: "2020", text: "Запуск онлайн-формата. Переход на системную работу с прогрессом и метриками." },
  { year: "2022", text: "Формализация метода: пять принципов, программы Sparta." },
  { year: "2024", text: "150+ доведённых клиентов. Программы Pro и Elite." },
  { year: "2026", text: `Запуск ${brand.name} как полноценной системы тренинга и сопровождения.` },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Обо мне</div>
        <h1 className="font-display text-text max-w-3xl">
          Я не продаю мотивацию. Я строю системы, в которых результат —{" "}
          <span className="text-accent">неизбежен.</span>
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-line">
        <div className="md:col-span-5">
          <div className="mono-label text-text-muted mb-4">Философия</div>
          <h2 className="font-display text-text">Точность важнее интенсивности</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-text-muted leading-relaxed">
          <p>
            Я работаю с теми, кто устал от иллюзий. От «начну с понедельника»,
            от тренировок «через силу», от диет, которые заканчиваются срывом.
            Моя работа — не разогнать вас на две недели, а построить систему,
            которая будет работать годами.
          </p>
          <p>
            Я верю в инженерный подход к телу. Цели измеримы. Прогресс
            фиксируется в цифрах. Программа корректируется по фактическим
            данным, а не по ощущениям. Срывы — не катастрофа, а параметр
            системы, который мы учитываем.
          </p>
          <p>
            Это не модно и не быстро. Но это работает. И главное — остаётся.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-line">
        <div className="mono-label text-text-muted mb-12">Путь</div>
        <div className="space-y-12">
          {milestones.map((m) => (
            <div key={m.year} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2 font-display text-3xl text-accent">
                {m.year}
              </div>
              <div className="md:col-span-10 text-text-muted leading-relaxed">
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
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

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-text max-w-2xl mx-auto">
          Готовы работать <span className="text-accent">всерьёз?</span>
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
