import { useState } from 'react'

const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue)
  const toggle = () => setValue((prev) => !prev)
  return [value, toggle] as const
}

export { useToggle }
