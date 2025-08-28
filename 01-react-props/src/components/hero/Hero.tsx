import "./Hero.css"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Workout with me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quidem voluptatibus ratione doloribus ad.
            Reprehenderit, asperiores ipsam minima excepturi eaque, dolores doloribus quaerat iste praesentium ratione
            alias consequatur. Quis, recusandae?
          </p>
          <a href="#" className="btn-basic">
            Join Club now
          </a>

          <div>
            <p>As Featured in</p>
            <img src="https://placehold.co/600x20" alt="" />
          </div>
          <img src="https://placehold.co/660x710" alt="" />
        </div>
      </section>
    </>
  )
}
