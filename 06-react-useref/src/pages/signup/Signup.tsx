import React, { useRef, useState } from "react"

interface User {
  username: string
  email: string
  password: string
}

export default function Signup() {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  })

  // ~ Wir deklarieren uns erstmal eine Variable mit useRef.
  // ~ Dann verwenden wir die Variable direkt in dem HTML Element. In dem Fall: input Element.

  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = usernameRef.current?.value || ""
    const email = emailRef.current?.value || ""
    const password = passwordRef.current?.value || ""
    setUser({ ...user, username: username, email: email, password: password })

    console.log(user)
  }

  return (
    <div className="mx-auto max-w-md">
      <h3 className="text-2xl mb-6">Sign Up</h3>
      <form className="space-y-4 text-blue-800" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            ref={usernameRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            ref={passwordRef}
          />
        </div>
        <button
          className="w-full rounded-md bg-red-600 hover:bg-sky-700 text-white px-4 py-2 font-medium"
          type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}
