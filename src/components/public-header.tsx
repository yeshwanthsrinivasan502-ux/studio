"use client";

import Link from "next/link";
import { BookHeart } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <BookHeart className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-headline font-bold text-primary">Verdant Reads</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button asChild variant={pathname === "/login" ? "default" : "ghost"}>
          <Link href="/login" prefetch={false}>
            Login
          </Link>
        </Button>
        <Button asChild variant={pathname === "/signup" ? "default" : "ghost"}>
          <Link href="/signup" prefetch={false}>
            Sign Up
          </Link>
        </Button>
      </nav>
    </header>
  );
}
