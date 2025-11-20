import { Article } from "@/types";
import { ArticleFormValues } from "@/lib/validations/article";

const MOCK_ARTICLES: Article[] = [
    {
        id: "1",
        title: "The Future of Web Development in 2025",
        slug: "future-web-dev-2025",
        status: "published",
        category: "Technology",
        author: "Jane Doe",
        publishedAt: "2025-11-15T10:00:00Z",
        views: 1250,
    },
    {
        id: "2",
        title: "Understanding Next.js App Router",
        slug: "understanding-nextjs-app-router",
        status: "published",
        category: "Development",
        author: "John Smith",
        publishedAt: "2025-11-18T14:30:00Z",
        views: 890,
    },
    {
        id: "3",
        title: "10 Tips for Better UI Design",
        slug: "10-tips-ui-design",
        status: "draft",
        category: "Design",
        author: "Alice Johnson",
        publishedAt: "",
        views: 0,
    },
    {
        id: "4",
        title: "Global Market Trends Q4",
        slug: "global-market-trends-q4",
        status: "archived",
        category: "Business",
        author: "Bob Wilson",
        publishedAt: "2025-10-01T09:15:00Z",
        views: 5400,
    },
    {
        id: "5",
        title: "Sustainable Energy Solutions",
        slug: "sustainable-energy-solutions",
        status: "published",
        category: "Environment",
        author: "Jane Doe",
        publishedAt: "2025-11-19T11:20:00Z",
        views: 320,
    },
];

export async function getArticles(): Promise<Article[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_ARTICLES;
}

export async function getArticle(id: string): Promise<Article | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_ARTICLES.find((article) => article.id === id);
}

export async function createArticle(data: ArticleFormValues): Promise<Article> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newArticle: Article = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        author: "Current User",
        publishedAt: data.status === 'published' ? new Date().toISOString() : "",
        views: 0,
    };
    MOCK_ARTICLES.push(newArticle);
    return newArticle;
}

export async function updateArticle(id: string, data: ArticleFormValues): Promise<Article> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const index = MOCK_ARTICLES.findIndex((a) => a.id === id);
    if (index === -1) throw new Error("Article not found");

    const updatedArticle = {
        ...MOCK_ARTICLES[index],
        ...data,
        publishedAt: data.status === 'published' && !MOCK_ARTICLES[index].publishedAt
            ? new Date().toISOString()
            : MOCK_ARTICLES[index].publishedAt,
    };

    MOCK_ARTICLES[index] = updatedArticle;
    return updatedArticle;
}
