import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Search, ShoppingCart, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/public-header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Welcome to Verdant Reads
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your digital sanctuary for books. Discover new worlds, track your reading journey, and find your next favorite story with our AI-powered recommendations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/dashboard">Start Reading</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/dashboard">Browse Catalog</Link>
                  </Button>
                </div>
              </div>
              <Image
                data-ai-hint="books library"
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground">Key Features</div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">A Better Way to Read</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Verdant Reads is designed to enhance your reading experience from discovery to the final page.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <BookOpen className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline">Vast Library</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Explore thousands of titles across all genres. From timeless classics to modern bestsellers.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Sparkles className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline">AI Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Our smart AI suggests books you'll love based on your unique reading patterns and preferences.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <ShoppingCart className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline">Integrated Store</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Easily purchase new e-books from our curated storefront to grow your personal collection.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Verdant Reads. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
