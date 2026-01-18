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

export interface AuditData {
  businessName: string;
  industry: string;
  revenue: string;
  employees: string;
  accountingSetup: string;
  painPoints: string[];
  customPain: string;
}

export type ViewState = 'landing' | 'articles' | 'article-view' | 'about';