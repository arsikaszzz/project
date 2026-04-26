import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CSSProperties, MouseEvent } from "react";

interface ConceptCardProps {
  to: string;
  icon: string;
  title: string;
  description: string;
  meta?: string;
  accent?: string;
  variant?: "concept" | "category";
}

export function ConceptCard({
  to,
  icon,
  title,
  description,
  meta,
  accent,
  variant = "concept",
}: ConceptCardProps) {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const style: CSSProperties = accent
    ? { ["--card-accent" as never]: hexToRgba(accent, 0.35) }
    : {};

  return (
    <Link
      to={to}
      className={`concept-card ${variant === "category" ? "category-card" : ""}`}
      onMouseMove={onMove}
      style={style}
    >
      <div className="card-icon" aria-hidden style={accent ? { color: accent } : undefined}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-meta">
        <span>{meta ?? "Открыть"}</span>
        <span className="arrow">
          Подробнее <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const v =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const num = parseInt(v, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
