import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Метод",
  description: "Пять принципов, на которых построена система тренинга AEGIS.",
};

const principles = [
  {
    n: "01",
    title: "Точность",
    body: "Лучше три тренировки в неделю, выполненные идеально, чем шесть — через силу. Точность техники, точность питания, точность восстановления.",
  },
  {
    n: "02",
    title: "Измеримость",
    body: "Всё, что не измеряется, не улучшается. Вес, обхваты, силовые показатели, % жира, качество сна — всё в цифрах. Без цифр нет прогресса.",
  },
  {
    n: "03",
    title: "Последовательность",
    body: "Одна тренировка не меняет тело. Двадцать — уже заметно. Двести — меняет жизнь. Последовательность важнее интенсивности.",
  },
  {
    n: "04",
    title: "Ответственность",
    body: "Никто не придёт и не сделает за вас. Тренер даёт план и поддержку. Остальное — ваша ответственность.",
  },
  {
    n: "05",
    title: "Долгосрочность",
    body: "Результат, который пришёл за 8 недель, уйдёт за 8 недель, если не закрепить. Мы строим не «форму к лету», а систему на годы.",
  },
];

export default function MethodPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Метод</div>
        <h1 className="font-display text-text max-w-3xl">
          Пять принципов, которые отделяют{" "}
          <span className="text-accent">результат</span> от иллюзии
        </h1>
        <p className="mt-8 text-text-muted text-lg max-w-2xl leading-relaxed">
          Метод — не набор «секретных протоколов». Это инженерная архитектура,
          которая делает результат предсказуемым.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-px bg-line">
          {principles.map((p) => (
            <article
              key={p.n}
              className="card bg-bg p-10 grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-3 font-display text-5xl text-accent">
                {p.n}
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl text-text mb-4">
                  {p.title}
                </h2>
                <p className="text-text-muted leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mono-label text-text-muted mb-4">
              Что это значит на практике
            </div>
            <h2 className="font-display text-text">
              Никакого «чудо-протокола»
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-text-muted leading-relaxed">
            <p>
              Метод — это набор инструментов: периодизация, измерение,
              корректировки, делoad-недели, работа с восстановлением. Они не
              магические, они просто работают.
            </p>
            <p>
              Программа — это адаптация этих инструментов под конкретного
              человека: возраст, опыт, образ жизни, генетику, время на
              тренировки. Универсальных схем нет.
            </p>
            <p>
              Дисциплина — это не «заставить себя». Это построить систему, в
              которой делать правильное проще, чем не делать.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-line text-center">
        <h2 className="font-display text-text max-w-2xl mx-auto">
          Готовы применить метод <span className="text-accent">к себе?</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/programs" className="btn btn-ghost">
            Посмотреть программы
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Записаться на разбор
          </Link>
        </div>
      </section>
    </>
  );
}
