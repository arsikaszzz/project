export interface Article {
  id: string;
  categoryId: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  body: string[];
  tags?: string[];
}

export interface Category {
  id: string;
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
}
