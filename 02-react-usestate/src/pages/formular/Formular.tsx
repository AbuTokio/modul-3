import { useState } from "react"

export default function Formular() {
  const [vorName, setVorName] = useState<string>("")
  const [nachName, setNachName] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [happy, setHappy] = useState<boolean>(false)
  const [shoes] = useState<string[]>(["Adidas", "Puma", "Jordans", "Fila"])

  // interface User {
  //   username: string
  //   email: string
  //   age: number
  // }

  // const [userOne] = useState<User>({
  //   username: "",
  //   email: "",
  //   age: 0,
  // })

  // console.log(userOne)

  return (
    <>
      <form>
        <label htmlFor="vorname">First name</label>
        <input
          type="text"
          name="vorname"
          id="vorname"
          value={vorName}
          onChange={(event) => {
            setVorName(event.target.value)
          }}
        />

        <label htmlFor="nachname">Last name</label>
        <input
          type="text"
          name="nachname"
          id="nachname"
          value={nachName}
          onChange={(event) => {
            setNachName(event.target.value)
          }}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(event) => {
            setAge(Number(event.target.value))
          }}
        />

        <label htmlFor="happy">Are you happy?</label>
        <input
          type="checkbox"
          name="happy"
          id="happy"
          checked={happy}
          onChange={(event) => {
            setHappy(event.target.checked)
          }}
        />
      </form>
      <div>First name: {vorName}</div>
      <div>Last name: {nachName}</div>
      <div>Age: {age}</div>
      <div>Are you happy? {happy ? "😁" : "😔"}</div>

      <div>
        <ul>
          {shoes.map((shoe: string, index: number) => {
            return <li key={index}>{shoe}</li>
          })}
        </ul>
      </div>
    </>
  )
}
