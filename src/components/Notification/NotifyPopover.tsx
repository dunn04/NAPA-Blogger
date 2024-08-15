import { NotificationOutlined } from '@ant-design/icons'
import { Badge, Button, Popover, PopoverProps } from 'antd'
import { FC } from 'react'
import { NotifyContent } from './NotifyContent'

type Props = Omit<PopoverProps, 'children'>

const NotifyPopover: FC<Props> = ({
  trigger = ['click'],
  overlayStyle = {
    width: 336
  },
  ...props
}) => {
  return (
    <Popover trigger={trigger} content={<NotifyContent />} overlayStyle={overlayStyle} {...props}>
      <Badge offset={[-10, 0]} count={99} size='small'>
        <Button type='text'>
          <NotificationOutlined />
        </Button>
      </Badge>
    </Popover>
  )
}

export { NotifyPopover }
