export type ArticleStatus = 'published' | 'draft' | 'archived';

export interface Article {
    id: string;
    title: string;
    slug: string;
    status: ArticleStatus;
    category: string;
    author: string;
    publishedAt: string;
    views: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
}
