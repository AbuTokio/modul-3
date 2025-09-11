import React, { createContext, useEffect, useState } from "react"
import type { ICharacter, IEpisode, ILocation } from "../interfaces/interfaces"
import axios from "axios"

// ~ 1. Zuerst wird hier mit der Methode "createContext" ein Context erstellt und direkt exportiert.
// ~ 2. Die erstellte Variable hat eine Eigenschaft "Provider", die als Komponente genutzt werden kann.
// ~ 3. Der Provider ist metaphorisch gesehen eine Art "Teleport Station", in der die Daten ausgelagert werden und können jederzeit abgerufen werden. Ohne eine Einschränkung.
// ~ 4. Danach sollte in dieser Datei eine Function bzw. Komponente erstellt werden.
// ~ 5. Die Function hat einen Parameter "children" als Object. Vom Type her ist es React.ReactNode.
// ~ 6. Der Parameter "children" sollte zwischen der erstellten Variable mainContext.Provider als Kind-Komponente genutzt werden.
// ~ 7. Der mainContext.Provider hat eine Eigenschaft "value", in der die States und Funktionen übergeben werden, die global verfügbar gemacht werden sollen.
// ~ 8. Am  Ende der Datei sollte der MainProvider in main.tsx importiert werden und die App-Komponente umschließen.

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProvierProps | null>(null)

type DataType = ICharacter | ILocation | IEpisode

export interface MainProvierProps {
  items: DataType[]
  setLink: React.Dispatch<React.SetStateAction<string | undefined>> // oder einfach:  () => void
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
  // ~ Hier werden die States und Funktionen erstellt, die wir global verfügbar machen wollen.
  const [link, setLink] = useState<string | undefined>("")
  const [items, setItems] = useState<any>([]) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [darkMode, setDarkMode] = useState(false)

  console.log(link)

  useEffect(() => {
    const getData = async () => {
      let url = ""
      if (link) {
        if (link === "character") {
          url = "https://rickandmortyapi.com/api/character"
        } else if (link === "location") {
          url = "https://rickandmortyapi.com/api/location"
        } else if (link === "episode") {
          url = "https://rickandmortyapi.com/api/episode"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.results) {
            setItems(resp.data.results)
          }
        } catch (error) {
          console.error("Irgendwas ist schief gelaufen!", error)
        }
      }
    }
    getData()
  }, [link])

  // ~ Hier werden unsere States und Funktionen übergeben, die wir global verfügbar machen wollen.
  return <mainContext.Provider value={{ items, setLink, darkMode, setDarkMode }}>{children}</mainContext.Provider>
}
