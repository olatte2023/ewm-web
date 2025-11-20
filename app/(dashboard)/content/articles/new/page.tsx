import { ArticleForm } from "@/components/features/articles/article-form"

export default function CreateArticlePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Article</h1>
        <p className="text-muted-foreground">
          Add a new article to your publication.
        </p>
      </div>
      <div className="rounded-md border p-6">
        <ArticleForm />
      </div>
    </div>
  )
}
