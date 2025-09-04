import { useEffect, useState } from "react"
import { Link } from "react-router"

type PokemonList = { name: string; url: string }[]

export default function PokemonOverview() {
  const [pokemonList, setPokemonList] = useState<PokemonList | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response: Response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await response.json()
        setPokemonList(data.results)
      } catch (e) {
        console.error(e)
      }
    }
    fetchPokemon()
  }, [])

  return (
    <ul>
      {pokemonList?.map((entry, i) => (
        <li key={entry.name}>
          <Link to={`/pokemon/${i + 1}`}>{entry.name}</Link>
        </li>
      ))}
    </ul>
  )
}
