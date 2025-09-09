import React, { useState } from "react"

interface User {
  username: string
  email: string
  tel: string
}

export default function Login() {
  // const [username, setUsername] = useState<string>("")
  // const [email, setEmail] = useState<string>("")
  // const [tel, setTel] = useState<string>("")

  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    tel: "",
  })

  const emailFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value })
  }

  const loginFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(user)
    console.log(`User wurde erfolgreich eingeloggt.`)
  }

  return (
    <div className="mx-auto flex">
      <div className="bg-[url(/funny_bg.jpeg)] w-lvw h-lvh mx-auto bg-no-repeat"></div>
      <h3 className="text-2xl mb-6">Login</h3>
      {/* <label htmlFor="username">username</label>
      <input
        className="w-full rounded-md border border-slate-300 h-10"
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      <form className="space-y-4 w-full text-blue-800" onSubmit={loginFunc}>
        <div>
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className="w-full rounded-md border border-slate-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:bg-yellow-400"
            type="text"
            value={user.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:bg-yellow-400"
            type="text"
            value={user.email}
            onChange={emailFunc}
          />
        </div>
        <div>
          <label htmlFor="tel">Tel</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:bg-yellow-400"
            type="text"
            value={user.tel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, tel: e.target.value })}
          />
        </div>
        <button className="w-full rounded-md bg-green-600 hover:bg-red-700 text-white p-4 font-medium" type="submit">
          Einloggen
        </button>
      </form>
    </div>
  )
}
