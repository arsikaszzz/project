import { NavLink } from "react-router-dom";
import { Sparkles, Home } from "lucide-react";
import { categories } from "../data";

interface SidebarProps {
  open: boolean;
  onNavigate: () => void;
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-brand">
        <div className="mark" aria-hidden>
          <Sparkles size={20} strokeWidth={1.8} />
        </div>
        <div>
          <div className="title">Хроники Архитекторов</div>
          <div className="subtitle">Esoteric Wiki</div>
        </div>
      </div>

      <div className="sidebar-section-label">Навигация</div>
      <nav className="sidebar-nav" aria-label="Основная">
        <NavLink to="/" end className="nav-link" onClick={onNavigate}>
          <Home size={18} className="nav-icon" />
          <span>Начало</span>
        </NavLink>
      </nav>

      <div className="sidebar-section-label">Категории</div>
      <nav className="sidebar-nav" aria-label="Категории">
        {categories.map((c) => (
          <NavLink
            key={c.id}
            to={`/category/${c.slug}`}
            className="nav-link"
            onClick={onNavigate}
          >
            <span className="nav-icon" aria-hidden>
              {c.icon}
            </span>
            <span>{c.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        Открытая база знаний о космологии, матрице, забытой истории и пути
        освобождения. Дополняйте, переосмысляйте, делитесь.
      </div>
    </aside>
  );
}
