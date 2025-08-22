"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  BookHeart,
  BookOpen,
  Library,
  LogOut,
  Settings,
  Sparkles,
  User,
  PanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <BookHeart className="w-8 h-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">
              Verdant Reads
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/dashboard")}
                icon={<BookOpen />}
                tooltip="Browse"
              >
                <Link href="/dashboard">Browse</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                icon={<Library />}
                tooltip="My Library"
                aria-disabled
                className="cursor-not-allowed opacity-50"
              >
                <Link href="#">My Library</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/dashboard/recommendations")}
                icon={<Sparkles />}
                tooltip="Recommendations"
              >
                <Link href="/dashboard/recommendations">AI Recommendations</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild icon={<LogOut />} tooltip="Logout">
                <Link href="/login">Logout</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                variant="outline"
                size="lg"
                className="gap-4 !h-14 group-data-[collapsible=icon]:!p-2"
              >
                <Link href="#">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://placehold.co/40x40.png"
                      alt="User"
                    />
                    <AvatarFallback>VR</AvatarFallback>
                  </Avatar>
                  <div className="flex w-full flex-col items-start">
                    <span className="font-medium">User</span>
                    <span className="text-xs text-muted-foreground">
                      user@example.com
                    </span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 sticky top-0 z-40">
          <SidebarTrigger className="md:hidden" />
          <div className="w-full flex-1">
            {/* Can be used for search bar in the future */}
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
