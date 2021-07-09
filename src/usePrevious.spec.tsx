import React, { useState } from "react"
import { usePrevious } from "./usePrevious"
import { fireEvent, render, screen } from "@testing-library/react"

describe("usePrevious", () => {
  it("uses previous value", () => {
    const Test = () => {
      const [count, setCount] = useState(0)
      const previousCount = usePrevious(count)
      const increment = () => setCount(count + 1)

      return (
        <button onClick={increment}>
          {count},{previousCount === undefined ? "undefined" : previousCount}
        </button>
      )
    }

    render(<Test />)

    const target = screen.getByRole("button")

    expect(target).toHaveTextContent("0,undefined")

    fireEvent.click(target)

    expect(target).toHaveTextContent("1,0")

    fireEvent.click(target)

    expect(target).toHaveTextContent("2,1")
  })
})
