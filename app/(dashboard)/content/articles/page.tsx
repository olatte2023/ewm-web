import { getArticles } from "@/services/articles"
import { ArticleTable } from "@/components/features/articles/article-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
          <p className="text-muted-foreground">
            Manage your news articles, drafts, and publications.
          </p>
        </div>
        <a href="/content/articles/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Article
          </Button>
        </a>
      </div>
      
      <ArticleTable articles={articles} />
    </div>
  )
}
