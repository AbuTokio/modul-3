import Item from "../item/Item"

const Start = () => {
  return (
    <>
      <section className="start">
        <h2>Not sure where to start?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, maiores.</p>
        <div className="box">
          <Item title="Product 1" description="Das ist unser erstes Produkt. Es ist sehr hochwertig." bg="red" />
          <Item title="Product 2" description="Das ist ein gutes Produkt, blablabla." bg="blue" />
        </div>
      </section>
    </>
  )
}

export default Start
