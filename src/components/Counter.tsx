import { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.counter}>
      <h1 className={classes.title}>{count}</h1>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </div>
  )
}
