import type { Car } from "../../interfaces/Car"

interface CardItemProps {
  car: Car
}

export default function CardItem({ car }: CardItemProps) {
  return (
    <>
      <h2>Modell: {car.modell}</h2>
      <h3>Marke: {car.marke}</h3>
      <p>PS: {car.ps}</p>
      <p>Produktionsjahr: {car.produktionsjahr}</p>
    </>
  )
}
