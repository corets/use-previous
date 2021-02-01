import React, { useState } from "react"
import { usePrevious } from "./usePrevious"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"

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

    const wrapper = mount(<Test />)
    const target = () => wrapper.find("button")

    expect(target().text()).toBe("0,undefined")

    act(() => {
      target().simulate("click")
    })

    expect(target().text()).toBe("1,0")

    act(() => {
      target().simulate("click")
    })

    expect(target().text()).toBe("2,1")
  })
})
