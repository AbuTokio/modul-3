import "./WorkOutIntro.css"

interface IntroProps {
  title: string
  text: string
  imageUrl: string
  reverse?: boolean
}

export default function WorkOutIntro(props: IntroProps) {
  return (
    <>
      <section className={`intro ${props.reverse && "reversed"}`}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <a href="">See more</a>
        </div>
        <img src={props.imageUrl} alt="" />
      </section>
    </>
  )
}
