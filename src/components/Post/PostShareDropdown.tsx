import { POST_SHARE_ITEM } from '@/constants'
import { MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, DropdownProps, MenuProps } from 'antd'
import { FC } from 'react'

type Props = {
  onMenuClick?: MenuProps['onClick']
  className?: string
  trigger?: DropdownProps['trigger']
}

const PostShareDropdown: FC<Props> = ({ className, onMenuClick, trigger = ['click'] }) => {
  return (
    <Dropdown
      className={className}
      menu={{
        items: POST_SHARE_ITEM,
        onClick: onMenuClick
      }}
      trigger={trigger}
    >
      <Button type='text' icon={<MoreOutlined />}></Button>
    </Dropdown>
  )
}

export { PostShareDropdown }
