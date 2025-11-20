import { notFound } from "next/navigation"
import { getArticle } from "@/services/articles"
import { ArticleForm } from "@/components/features/articles/article-form"

interface EditArticlePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const { id } = await params
  const article = await getArticle(id)

  if (!article) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Article</h1>
        <p className="text-muted-foreground">
          Make changes to your article.
        </p>
      </div>
      <div className="rounded-md border p-6">
        <ArticleForm initialData={article} />
      </div>
    </div>
  )
}
