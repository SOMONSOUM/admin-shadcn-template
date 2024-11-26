"use client";

import { Menu, User, PanelLeftClose, PanelRightClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar/sidebar";
import React from "react";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">ការគ្រប់គ្រងដីធ្លី</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="text-sm">០០១ អាដមិន</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-blue-700"
          >
            <ReactCountryFlag
              countryCode="US"
              svg
              title="United States"
              style={{ width: 20, height: 20 }}
            />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <div
          className={cn(
            "hidden border-r bg-background md:block transition-all duration-300 relative",
            sidebarCollapsed ? "w-[60px]" : "w-[240px]"
          )}
        >
          <Sidebar collapsed={sidebarCollapsed} pathname={pathname} />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[-20px] top-4 hidden md:flex"
            onClick={toggleSidebar}
          >
            {sidebarCollapsed ? (
              <PanelRightClose className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden absolute top-2 left-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <SheetTitle />
            <Sidebar collapsed={false} pathname={pathname} />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
