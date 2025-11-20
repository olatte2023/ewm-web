"use client"

import { Article } from "@/types"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash, Eye } from "lucide-react"
import { format } from "date-fns"

interface ArticleTableProps {
  articles: Article[]
}

export function ArticleTable({ articles }: ArticleTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span>{article.title}</span>
                  <span className="text-xs text-muted-foreground">{article.slug}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={
                    article.status === 'published' ? 'default' : 
                    article.status === 'draft' ? 'secondary' : 'outline'
                  }
                >
                  {article.status}
                </Badge>
              </TableCell>
              <TableCell>{article.category}</TableCell>
              <TableCell>{article.author}</TableCell>
              <TableCell>
                {article.publishedAt ? format(new Date(article.publishedAt), "MMM d, yyyy") : "-"}
              </TableCell>
              <TableCell className="text-right">{article.views.toLocaleString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={`/content/articles/${article.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
