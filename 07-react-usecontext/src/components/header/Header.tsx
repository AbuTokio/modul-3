import { useContext } from "react"
import Nav from "../nav/Nav"
import { mainContext, type MainProvierProps } from "../../context/MainProvider"

export default function Header() {
  const { darkMode, setDarkMode } = useContext(mainContext) as MainProvierProps

  return (
    <header>
      <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"}</button>
      <Nav />
    </header>
  )
}
