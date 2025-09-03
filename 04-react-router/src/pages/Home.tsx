import { Link } from "react-router"

export default function Home() {
  return (
    <div>
      <h1>Meine schöne Seite</h1>
      <p>Willkommen auf meiner schönen Seite!</p>
      <p>
        Test test <Link to="/contact">Link to Contact</Link>
      </p>
    </div>
  )
}
