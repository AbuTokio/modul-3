import { Link, useParams } from "react-router"
import type { Pokemon } from "../interfaces/Pokemon"
import { useEffect, useState } from "react"

export default function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data: Pokemon = await response.json()
        setPokemon(data)
        const cry = new Audio(data.cries.legacy)
        cry.play()
      } catch (e) {
        console.error(e)
      }
    }
    fetchPokemon()
  }, [id])

  if (!pokemon) return "404, Pokemon not found."

  return (
    <div>
      <div className="flex gap-4">
        <img className="w-48 [image-rendering:pixelated]" src={pokemon.sprites.front_default} alt={pokemon?.name} />
        <div>
          <h1 className="text-5xl ">{pokemon.name}</h1>
          <p>weight: {pokemon.weight}</p>
          <p>height: {pokemon.height}</p>
        </div>
      </div>
      <div className="flex justify-between">
        {Number(id) > 1 && <Link to={`/pokemon/${Number(id) - 1}`}>Zurück</Link>}
        {Number(id) < 151 && <Link to={`/pokemon/${Number(id) + 1}`}>Weiter</Link>}
      </div>
    </div>
  )
}
