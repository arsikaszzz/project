import type { Metadata } from "next";
import { brand } from "@/data/brand";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Записаться на разбор и обсудить программу AEGIS.",
};

export default function ContactPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Контакты</div>
        <h1 className="font-display text-text max-w-3xl">
          Записаться на <span className="text-accent">разбор</span>
        </h1>
        <p className="mt-8 text-text-muted text-lg max-w-2xl leading-relaxed">
          Разбор — это 30-минутная встреча, на которой мы обсудим вашу цель,
          текущее состояние и подходящую программу. Без обязательств.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <div className="mono-label text-text-dim mb-4">Прямая связь</div>
            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-text hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent" />
                {brand.email}
              </a>
              <a
                href={`https://t.me/${brand.telegram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-text hover:text-accent transition-colors"
              >
                <Send size={16} className="text-accent" />
                Telegram {brand.telegram}
              </a>
            </div>
          </div>
          <div>
            <div className="mono-label text-text-dim mb-4">Что дальше</div>
            <ol className="space-y-4 text-text-muted text-sm">
              <li className="flex gap-4">
                <span className="font-display text-accent">01</span>
                <span>Вы оставляете заявку на этой странице.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-accent">02</span>
                <span>В течение 24 часов отвечаю и присылаю анкету.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-accent">03</span>
                <span>Назначаем разбор в Zoom — 30 минут.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-accent">04</span>
                <span>
                  По итогам — рекомендация программы и формат сопровождения.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
