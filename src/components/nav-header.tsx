import * as React from "react"
import { ChevronsUpDown, DicesIcon, Plus } from "lucide-react"

import { Logo } from "./Logo";
import { ModeToggle } from "./ModeToggle";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavHeader() {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <DicesIcon size={25} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              mini-games
            </span>
          </div>
          <ModeToggle />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
