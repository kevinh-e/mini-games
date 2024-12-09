import * as React from "react"
import {
  Keyboard,
  LayoutDashboard,
  PuzzleIcon,
  Settings2,
  Target,
  Trophy,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavOther } from "@/components/sidebar/nav-other"
import { NavUser } from "@/components/sidebar/nav-user"
import { NavHeader } from "@/components/sidebar/nav-header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "sample",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "puzzle",
      url: "/puzzle",
      icon: PuzzleIcon,
      isActive: true,
      items: [
        {
          title: "history",
          url: "#",
        },
        {
          title: "starred",
          url: "#",
        },
        {
          title: "settings",
          url: "#",
        },
      ],
    },
    {
      title: "word",
      url: "/word",
      icon: Keyboard,
      items: [
        {
          title: "genesis",
          url: "#",
        },
        {
          title: "explorer",
          url: "#",
        },
        {
          title: "quantum",
          url: "#",
        },
      ],
    },
    {
      title: "strategy",
      url: "/strategy",
      icon: Target,
      items: [
        {
          title: "introduction",
          url: "#",
        },
        {
          title: "get Started",
          url: "#",
        },
        {
          title: "tutorials",
          url: "#",
        },
        {
          title: "changelog",
          url: "#",
        },
      ],
    },
  ],
  other: [
    {
      name: "dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "leaderboard",
      url: "/leaderboard",
      icon: Trophy,
    },
    {
      name: "settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavOther projects={data.other} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
