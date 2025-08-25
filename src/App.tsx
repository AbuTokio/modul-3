import "./App.css"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"

// # Ordnerstruktur

// node_modules // ? Hier befinden sich alle Packages, die für React bzw. das Projekt benötigt werden.
// public // ? Hier werden Bilder, Fonts, etc. abgelegt.
// src // ? Hier verbringen wir 95% unserer Zeit. Hier erstellen wir zuerst 2 Ordner: components & pages
// src/assets // ? Hier kann ich auch Bilder etc. ablegen, muss sie dann aber über "import" importieren, wenn ich sie benutzen will.
// app.css // ? Hier kommen nur die Styles rein, die die App.tsx betreffen.
// index.css // ? Hier kommt das globale Styling rein (z.B. <p>, <h1>, etc.).

function App() {
  // App.tsx // ? Das ist wie ein Verwaltungszentrum der App.
  // Hier definieren wir unsere App-Komponente.
  // Wir können unsere React-Komponente in einer beliebigen Function Syntax schreiben (z.B. Arrow-Function).

  // Hier kommen die Funktionen und Hooks rein.

  function sayHello() {
    console.log("Hello World!")
  }

  return (
    // <></> - Das ist ein sogenanntes React Fragment. React benötigt diese Syntax, sonst meckert es rum. Im HTML DOM wird das aber nicht angezeigt. Wir können also keine Class oder Ähnliches vergeben.
    <>
      <h2>Ich bin ein h2 Element in der App.tsx</h2>
      <Home />
      <Footer />
    </>
  )
}

export default App
