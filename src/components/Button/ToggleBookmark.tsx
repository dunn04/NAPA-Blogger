import { BookFilled, BookOutlined } from '@ant-design/icons'
import { ToggleButton, ToggleButtonProps } from './ToggleButton'
import { FC } from 'react'

type Props = Omit<ToggleButtonProps, 'checkedIcon' | 'unCheckedIcon'>

const ToggleBookmark: FC<Props> = ({ ...props }) => {
  return <ToggleButton checkedIcon={<BookFilled />} unCheckedIcon={<BookOutlined />} {...props} />
}

export { ToggleBookmark }
