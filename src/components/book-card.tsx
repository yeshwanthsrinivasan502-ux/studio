import Image from "next/image";
import type { Book } from "@/lib/mock-data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="aspect-[2/3] relative">
          <Image
            src={book.coverUrl}
            alt={`Cover of ${book.title}`}
            fill
            className="object-cover"
            data-ai-hint="book cover"
          />
        </div>
        <div className="p-4">
          <Badge variant="secondary" className="mb-2">{book.genre}</Badge>
          <h3 className="font-headline text-lg font-semibold leading-tight truncate" title={book.title}>
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 truncate">{book.author}</p>
          <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
