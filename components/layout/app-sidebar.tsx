"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  LayoutDashboard,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/(dashboard)",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Content",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Articles",
          url: "/content/articles",
        },
        {
          title: "Categories",
          url: "/content/categories",
        },
      ],
    },
    {
      title: "Media",
      url: "/media",
      icon: ImageIcon,
    },
    {
      title: "System",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Users",
          url: "/users",
        },
        {
          title: "Settings",
          url: "/settings",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">News CMS</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                     <div className="pl-6 mt-1 space-y-1">
                        {item.items.map((subItem) => (
                          <a 
                            key={subItem.title} 
                            href={subItem.url}
                            className="block text-sm text-muted-foreground hover:text-foreground py-1"
                          >
                            {subItem.title}
                          </a>
                        ))}
                     </div>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          v1.0.0
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
