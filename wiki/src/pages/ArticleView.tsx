import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getArticleById, getCategoryById } from "../data";

export function ArticleView() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return (
      <section className="page-hero">
        <h1 className="page-title">Статья не найдена</h1>
        <p className="page-lede">
          Этот фрагмент пока не существует или ещё не материализовался.{" "}
          <Link to="/" style={{ color: "var(--accent)" }}>
            Вернуться к карте
          </Link>
          .
        </p>
      </section>
    );
  }

  const category = getCategoryById(article.categoryId);

  return (
    <article className="article">
      <div className="breadcrumb">
        <Link to="/">Хроники</Link>
        <span>/</span>
        {category && (
          <>
            <Link to={`/category/${category.slug}`}>{category.title}</Link>
            <span>/</span>
          </>
        )}
        <span style={{ color: "var(--text-dim)" }}>{article.title}</span>
      </div>

      <h1>{article.title}</h1>
      {article.subtitle && <div className="subtitle">{article.subtitle}</div>}

      <div className="body">
        {article.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {article.tags && article.tags.length > 0 && (
        <div className="tags">
          {article.tags.map((t) => (
            <span key={t} className="tag">
              #{t}
            </span>
          ))}
        </div>
      )}

      <Link
        to={category ? `/category/${category.slug}` : "/"}
        className="back-link"
      >
        <ChevronLeft size={16} />
        {category ? `Назад в «${category.title}»` : "На главную"}
      </Link>
    </article>
  );
}
