import { NavLink } from "react-router"

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium hover:text-sky-600 ${isActive ? "text-red-800" : "text-slate-700"}`

  return (
    <header className="border-b border-green-400 bg-slate-900/60">
      <div className="container mx-auto max-w-5xl p-4 flex justify-between items-center">
        <nav className="flex items-center gap-4">
          <NavLink className={linkClass} to={"/"}>
            Home
          </NavLink>
          <NavLink className={linkClass} to={"login"}>
            Login
          </NavLink>
          <NavLink className={linkClass} to={"signup"}>
            Sign Up
          </NavLink>
          <NavLink className={linkClass} to={"posts"}>
            Posts
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
