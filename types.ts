export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export interface AuditResult {
  bleed_estimate: string;
  triage_plan: string[];
}

export type ViewState = 'landing' | 'articles' | 'article-view' | 'about';