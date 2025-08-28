import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import Start from "../../components/start/Start"
import WorkOutIntro from "../../components/workOutIntro/WorkOutIntro"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Start />
      <WorkOutIntro title="Home WorkOut" text="Ich bin einfach ein Text." imageUrl="https://placehold.co/2560x1700" />
      <WorkOutIntro
        title="Super Strong WorkOut"
        text="Ich bin auch einfach ein Text. Hahaha."
        imageUrl="https://placehold.co/2560x1700"
        reverse
      />
    </>
  )
}
