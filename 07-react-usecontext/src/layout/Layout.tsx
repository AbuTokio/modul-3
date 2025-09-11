import { Outlet } from "react-router"
import Header from "../components/header/Header"
import { useContext } from "react"
import { mainContext, type MainProvierProps } from "../context/MainProvider"

export default function Layout() {
  const { darkMode } = useContext(mainContext) as MainProvierProps

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
