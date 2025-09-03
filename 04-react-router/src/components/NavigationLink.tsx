import { NavLink } from "react-router"

interface NavigationLinkProps {
  to: string
  label: string
}

export default function NavigationLink({ to, label }: NavigationLinkProps) {
  return (
    <NavLink className={(state) => `p-2 ${state.isActive ? "bg-amber-300" : "bg-green-300"}`} to={to}>
      {label}
    </NavLink>
  )
}
