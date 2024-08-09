import { FC } from 'react'
import { ToggleButton, ToggleButtonProps } from './ToggleButton'
import { CheckOutlined, LikeOutlined } from '@ant-design/icons'

type Props = Omit<ToggleButtonProps, 'checkedIcon' | 'unCheckedIcon' | 'children'>

const ToggleFollow: FC<Props> = ({ ...props }) => {
  return (
    <ToggleButton
      checkedIcon={<CheckOutlined />}
      unCheckedIcon={<LikeOutlined />}
      {...props}
      checkedText='Following'
      unCheckedText='Follow'
    />
  )
}

export { ToggleFollow }
