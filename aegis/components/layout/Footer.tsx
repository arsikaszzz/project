import Link from "next/link";
import { brand } from "@/data/brand";
import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-y-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="font-display text-3xl tracking-[-0.02em] mb-4">{brand.name}</div>
          <p className="text-text-muted max-w-xs">{brand.slogan}</p>
          <div className="mt-8 text-xs text-text-dim">© {currentYear} {brand.name}. Все права защищены.</div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <div className="mono-label mb-4">Навигация</div>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-accent transition-colors">Обо мне</Link></li>
            <li><Link href="/programs" className="hover:text-accent transition-colors">Программы</Link></li>
            <li><Link href="/method" className="hover:text-accent transition-colors">Метод</Link></li>
            <li><Link href="/pricing" className="hover:text-accent transition-colors">Тарифы</Link></li>
            <li><Link href="/results" className="hover:text-accent transition-colors">Результаты</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Блог</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <div className="mono-label mb-4">Контакты</div>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-accent transition-colors">
              <Mail size={16} /> {brand.email}
            </a>
            <a href={`https://t.me/${brand.telegram.replace('@', '')}`} target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors">
              <span>Telegram</span>
            </a>
            <a href={`https://instagram.com/${brand.instagram.replace('@', '')}`} target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Instagram size={16} /> {brand.instagram}
            </a>
            <a href={`https://youtube.com/${brand.youtube.replace('@', '')}`} target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Youtube size={16} /> YouTube
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="md:col-span-2 text-xs text-text-dim">
          <div className="mono-label mb-4">Правовая информация</div>
          <div className="space-y-2">
            <div>Политика конфиденциальности</div>
            <div>Согласие на обработку данных</div>
            <div>Публичная оферта</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
