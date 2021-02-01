import { useEffect, useRef } from "react"
import { UsePrevious } from "./types"

export const usePrevious: UsePrevious = <TValue = any>(value: TValue) => {
  const ref = useRef<TValue | undefined>(undefined)

  const updatePreviousValue = () => {
    ref.current = value
  }

  useEffect(updatePreviousValue, [JSON.stringify(value)])

  return ref.current
}
