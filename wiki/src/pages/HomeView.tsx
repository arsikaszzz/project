import { categories, articles } from "../data";
import { ConceptCard } from "../components/ConceptCard";

export function HomeView() {
  const featured = articles.slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">
          <span className="dot" /> Esoteric Atlas · v0.1
        </span>
        <h1 className="page-title">
          Хроники <span className="glow-word">Архитекторов</span>
        </h1>
        <p className="page-lede">
          Структурированный атлас знаний о космологии, иллюзии плотного мира,
          забытых цивилизациях и пути освобождения. Каждая статья — фрагмент
          большой карты, которую читатель собирает сам.
        </p>
      </section>

      <section className="featured-banner">
        <h2>Карта направлений</h2>
        <p>
          Пять смысловых лучей: Архитектура Мироздания, Иллюзия и Матрица,
          Сущности и Хранители, Скрытая История и Путь Освобождения. Начните с
          того, что отзывается, — остальное соберётся в ходе чтения.
        </p>
      </section>

      <div className="cards-grid">
        {categories.map((c) => (
          <ConceptCard
            key={c.id}
            to={`/category/${c.slug}`}
            icon={c.icon}
            title={c.title}
            description={c.tagline}
            meta="Категория"
            accent={c.accent}
            variant="category"
          />
        ))}
      </div>

      <div className="section-label">Избранные концепты</div>

      <div className="cards-grid">
        {featured.map((a) => {
          const cat = categories.find((c) => c.id === a.categoryId);
          return (
            <ConceptCard
              key={a.id}
              to={`/article/${a.id}`}
              icon={cat?.icon ?? "✦"}
              title={a.title}
              description={a.excerpt}
              meta={cat?.title}
              accent={cat?.accent}
            />
          );
        })}
      </div>
    </>
  );
}
