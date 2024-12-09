import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/Navbar";
import {
  SidebarInset,
  SidebarProvider,
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
        <Navbar />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
