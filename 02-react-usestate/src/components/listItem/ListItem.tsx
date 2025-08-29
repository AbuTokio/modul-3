import type { Car } from "../../interfaces/Car"
import CardItem from "../cardItem/CardItem"

interface ListItemProps {
  cars: Car[]
}

export default function ListItem({ cars }: ListItemProps) {
  // console.log(cars)
  return (
    <>
      {cars.map((car: Car, index: number) => {
        // console.log(car)
        return (
          <div key={index}>
            <CardItem car={car} />
          </div>
        )
      })}
    </>
  )
}
