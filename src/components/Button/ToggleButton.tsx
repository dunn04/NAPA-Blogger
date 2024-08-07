import { Button, ButtonProps } from 'antd'
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react'

export type ToggleButtonProps = {
  className?: string
  unCheckedIcon: ReactNode
  checkedIcon: ReactNode
  value?: boolean
  onChange?: (value: boolean) => void
  onClick?: () => void
  defaultValue?: boolean
  type?: ButtonProps['type']
} & PropsWithChildren

const ToggleButton: FC<ToggleButtonProps> = ({
  className,
  unCheckedIcon,
  checkedIcon,
  value,
  onChange,
  onClick,
  defaultValue,
  type = 'text',
  children
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
    <Button
      type={type}
      className={className}
      onClick={handleClick}
      icon={checked ? checkedIcon : unCheckedIcon}
      children={children}
    />
  )
}

export { ToggleButton }
