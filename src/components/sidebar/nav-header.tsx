import { DicesIcon } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavHeader() {
  const { isMobile, state } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-all ease-linear transform hover:scale-105"
        >
          <a
            className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground cursor-pointer"
            href="/"
            aria-label="Home"
          >
            <DicesIcon size={25} />
          </a>
          <a className="grid flex-1 text-left text-lg leading-tight cursor-pointer" href="/" aria-label="Home" >
            <span className="truncate font-semibold">
              mini-games
            </span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
