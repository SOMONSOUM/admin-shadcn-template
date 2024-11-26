import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navigation = [
  { name: "ផ្ទាំងគ្រប់គ្រង", href: "/dashboard", icon: LayoutDashboard },
  { name: "មន្ត្រីរាជការ", href: "/staff", icon: Users },
  { name: "មន្ត្រីដែលទទួលខុសត្រូវ", href: "/responsible", icon: Users },
  { name: "ទម្រង់សាលាក្រម", href: "/forms", icon: FileText },
  { name: "តារាងពេលវេលា", href: "/schedule", icon: Calendar },
  { name: "ស្ថាប័ន", href: "/institutions", icon: Building2 },
  { name: "របាយការណ៍", href: "/reports", icon: BarChart3 },
  {
    name: "ការកំណត់",
    href: "/settings",
    icon: Settings,
    subItems: [
      { name: "អ្នកប្រើប្រាស់", href: "/settings/users" },
      { name: "តួនាទី", href: "/settings/roles" },
    ],
  },
];

interface SidebarProps {
  collapsed: boolean;
  pathname: string;
}

export function Sidebar({ collapsed, pathname }: SidebarProps) {
  return (
    <div className="flex h-full flex-col px-3 py-4">
      <div className="space-y-1">
        {navigation.map((item) => (
          <React.Fragment key={item.name}>
            {item.subItems ? (
              <Collapsible>
                <CollapsibleTrigger className="w-full">
                  <div
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                      "text-muted-foreground hover:text-primary",
                      pathname.startsWith(item.href) &&
                        "bg-accent text-primary font-medium"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.name}</span>}
                    </div>
                    {!collapsed && <ChevronDown className="h-4 w-4" />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {!collapsed &&
                    item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                          "text-muted-foreground hover:text-primary ml-6",
                          pathname === subItem.href &&
                            "bg-accent text-primary font-medium"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                  "text-muted-foreground hover:text-primary",
                  pathname === item.href && "bg-accent text-primary font-medium"
                )}
              >
                <item.icon className="h-4 w-4" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
