import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import React from "react";

export default function Page(
  { children }: Readonly<{
    children: React.ReactNode
  }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="absolute z-10 h-16 w-12 shrink-0 flex items-center justify-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <SidebarTrigger />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
