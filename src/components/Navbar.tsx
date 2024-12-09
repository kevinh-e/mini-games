import { ModeToggle } from "./ModeToggle";
import NavCrumb from "./NavCrumb";

export default function Navbar() {
  return (
    <nav className="flex h-16 shrink-0 items-center gap-2 justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <NavCrumb />
      </div>
      <div className="px-4">
        <ModeToggle />
      </div>
    </nav>
  )
}
