import Liste from "../../components/liste/Liste"
import Header from "../../components/header/Header"

export default function Home() {
  // Selbstgeschriebene Komponenten (wie hier z.B. "Liste") werden groß geschrieben, um sie von eingebauten HTML-Elementen zu unterscheiden.

  return (
    <>
      <Header />
      <main>
        <h2>Ich bin in der Home Seite</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dicta vel consequatur, facilis repudiandae
          animi magni quam ex tenetur quaerat!
        </p>
        <Liste />

        <ol>
          <li>Ich bin das erste Element</li>
          <li>Ich bin das zweite Element</li>
          <li>Ich bin das dritte Element</li>
        </ol>
      </main>
    </>
  )
}
