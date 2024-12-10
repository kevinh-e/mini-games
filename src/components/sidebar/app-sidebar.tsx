import * as React from "react"
import {
  Keyboard,
  LayoutDashboard,
  LayoutList,
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
import { games } from "@/components/routes";

const data = {
  user: {
    name: "sample",
    email: "m@example.com",
    avatar: "favicon.svg",
  },
  navMain: [
    {
      title: "puzzle",
      url: "/puzzle",
      icon: PuzzleIcon,
      items: games.puzzle.games
    },
    {
      title: "word",
      url: "/word",
      icon: Keyboard,
      items: games.word.games,
    },
    {
      title: "strategy",
      url: "/strategy",
      icon: Target,
      items: games.strategy.games,
    },
  ],
  other: [
    {
      name: "all games",
      url: "/games",
      icon: LayoutList,
    },
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
