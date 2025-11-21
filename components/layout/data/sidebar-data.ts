// d:/NBC/Project/ewm/ewm-web/components/layout/data/sidebar-data.ts

import {
  Bell,
  BookOpen,
  Bot,
  Bug,
  Command,
  Construction,
  FileText,
  FileX,
  FolderOpen,
  Frame,
  HelpCircle,
  Image as ImageIcon,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  Map,
  Monitor,
  Palette,
  PieChart,
  Send,
  ServerOff,
  Settings,
  Settings2,
  ShieldCheck,
  SquareTerminal,
  UserCog,
  UserX,
  Users,
  Wrench,
} from "lucide-react";
import { NavGroup, Team, User } from "../types";

export const sidebarData = {
  teams: [{ name: "Team A" }, { name: "Team B" }] as Team[],
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder-avatar.png",
  } as User,
  navGroups: [
    {
      title: "Platform",
      items: [
        {
          title: "Dashboard",
          url: "/console",
          icon: LayoutDashboard,
        },
        {
          title: "Content",
          url: "#",
          icon: FileText,
          items: [
            { title: "Articles", url: "/console/content/articles" },
            { title: "Categories", url: "/console/content/categories" },
          ],
        },
        {
          title: "Media",
          url: "/console/media",
          badge: "3",
          icon: ImageIcon,
        },
        {
          title: "Users",
          url: "/users",
          icon: Users,
        },
      ],
    } as NavGroup,
    {
      title: "Apps",
      items: [
        {
          title: "Analytics",
          icon: PieChart,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-in-2",
            },
            {
              title: "Sign Up",
              url: "/sign-up",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        {
          title: "Ads Manager",
          icon: Send,
          items: [
            {
              title: "Unauthorized",
              url: "/errors/unauthorized",
              icon: Lock,
            },
            {
              title: "Forbidden",
              url: "/errors/forbidden",
              icon: UserX,
            },
            {
              title: "Not Found",
              url: "/errors/not-found",
              icon: FileX,
            },
            {
              title: "Internal Server Error",
              url: "/errors/internal-server-error",
              icon: ServerOff,
            },
            {
              title: "Maintenance Error",
              url: "/errors/maintenance-error",
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: "Systems",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: Bell,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: Monitor,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
