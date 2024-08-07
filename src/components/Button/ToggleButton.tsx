import { Button, ButtonProps } from 'antd'
import { FC, ReactNode, useEffect, useState } from 'react'

export type ToggleButtonProps = {
  className?: string
  unCheckedIcon: ReactNode
  checkedIcon: ReactNode
  value?: boolean
  onChange?: (value: boolean) => void
  onClick?: () => void
  defaultValue?: boolean
  type?: ButtonProps['type']
}

const ToggleButton: FC<ToggleButtonProps> = ({
  className,
  unCheckedIcon,
  checkedIcon,
  value,
  onChange,
  onClick,
  defaultValue,
  type = 'text'
}) => {
  const [checked, setChecked] = useState(defaultValue)

  useEffect(() => {
    if (value !== undefined) {
      setChecked(value)
    }
  }, [value])

  const handleClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange?.(newChecked)
    onClick?.()
  }

  return (
    <Button type={type} className={className} onClick={handleClick}>
      {checked ? checkedIcon : unCheckedIcon}
    </Button>
  )
}

export { ToggleButton }
