import { useEffect, useState } from "react"

const unused = null
let variable = 10

const myHook = (defaultValue: number) => {
  const [count, setCount] = useState(defaultValue)

  return { count, setCount }
}

export const Component = () => {
  const { count, setCount } = myHook(0)

  useEffect(() => {
    console.log(count)
  }, [])

  return <button onClick={() => setCount((prev) => prev++)}>increment</button>
}

export const example = {
  a: "string",
  b: () => null,
  c: (x: any) => x,
  d: variable
}
