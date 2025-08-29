import { useState } from "react"
import "./App.css"
import CounterComponent from "./components/counterComponent.tsx/CounterComponent"
import Formular from "./pages/formular/Formular"
import type { Car } from "./interfaces/Car"
import cars from "./data/Cars"
import ListItem from "./components/listItem/ListItem"
import { Notifications, UserProfil } from "./Recap"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const [data] = useState<Car[]>(cars)

  // console.log(data)

  return (
    <>
      <div className={`${darkMode ? "dark" : "light"}`}>
        {/* Wenn man mehrere Klassen hat */}
        {/* Bei nur einer Klasse, alternativ: className={darkMode ? "dark" : "light"} */}
        <button
          onClick={() => {
            setDarkMode(!darkMode)
          }}>
          <img src="/icon_dark-light-mode.png" alt="dark-light-mode" />
        </button>
        <CounterComponent />
        <Formular />
        <ListItem cars={data} />

        <UserProfil name="Joe" />
        <UserProfil name={null} />
        <UserProfil />
        <UserProfil name="" />

        <Notifications count={3} />
        <Notifications count={0} />
        <Notifications count={null} />
      </div>
    </>
  )
}

export default App
