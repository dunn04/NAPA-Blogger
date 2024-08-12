import { NotificationOutlined } from '@ant-design/icons'
import { Badge, Button, Popover, PopoverProps } from 'antd'
import { FC } from 'react'

type Props = Omit<PopoverProps, 'children'>

const NotifyPopover: FC<Props> = ({
  trigger = ['click'],
  overlayStyle = {
    width: 336
  },
  ...props
}) => {
  const content = <h1>this is notification</h1>

  return (
    <Popover trigger={trigger} content={content} overlayStyle={overlayStyle} {...props}>
      <Badge offset={[-10, 0]} count={99} size='small'>
        <Button type='text'>
          <NotificationOutlined />
        </Button>
      </Badge>
    </Popover>
  )
}

export { NotifyPopover }
