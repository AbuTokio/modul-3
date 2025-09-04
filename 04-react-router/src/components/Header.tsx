import NavigationLink from "./NavigationLink"

export default function Header() {
  return (
    <header className="bg-pink-500 p-2">
      <nav className="flex gap-2">
        <NavigationLink to="/" label="Home" />
        <NavigationLink to="/about" label="About" />
        <NavigationLink to="/blog" label="Blog" />
        <NavigationLink to="/pokemon" label="Pokémon" />
        <NavigationLink to="/contact" label="Contact" />
      </nav>
    </header>
  )
}
