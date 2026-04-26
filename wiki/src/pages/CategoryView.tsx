import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getArticlesByCategory, getCategoryBySlug } from "../data";
import { ConceptCard } from "../components/ConceptCard";

export function CategoryView() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) {
    return (
      <section className="page-hero">
        <h1 className="page-title">Категория не найдена</h1>
        <p className="page-lede">
          Возможно, узор сместился. Вернитесь на{" "}
          <Link to="/" style={{ color: "var(--accent)" }}>
            главную
          </Link>{" "}
          и выберите другую тропу.
        </p>
      </section>
    );
  }

  const list = getArticlesByCategory(category.id);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">
          <span className="dot" /> Категория · {category.icon}
        </span>
        <h1 className="page-title">{category.title}</h1>
        <p className="page-lede">{category.description}</p>
      </section>

      {list.length === 0 ? (
        <p style={{ color: "var(--text-faint)" }}>
          В этой категории пока нет статей. Скоро здесь появится больше.
        </p>
      ) : (
        <div className="cards-grid">
          {list.map((a) => (
            <ConceptCard
              key={a.id}
              to={`/article/${a.id}`}
              icon={category.icon}
              title={a.title}
              description={a.excerpt}
              meta={a.subtitle ?? "Концепт"}
              accent={category.accent}
            />
          ))}
        </div>
      )}

      <Link to="/" className="back-link">
        <ChevronLeft size={16} /> Все категории
      </Link>
    </>
  );
}
