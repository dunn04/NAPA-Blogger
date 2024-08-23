import { Button, Drawer, DrawerProps, Flex } from 'antd'
import React, { FC } from 'react'
import { Logo } from '../Logo'
import { NavigationMenu } from '../Sidebar'
import { MenuFoldOutlined } from '@ant-design/icons'

type Props = Omit<DrawerProps, 'onClose'> & {
  onClose?: (e?: React.MouseEvent | React.KeyboardEvent) => void
}

const DrawerMenu: FC<Props> = ({ ...props }) => {
  const Title = (
    <Flex align='center' justify='space-between'>
      <Logo sizes='sm' onClick={props.onClose} />
      <Button type='text' onClick={props.onClose}>
        <MenuFoldOutlined />
      </Button>
    </Flex>
  )
  return (
    <Drawer placement='left' title={Title} closeIcon={null} {...props}>
      <NavigationMenu className='' onItemClick={() => props.onClose?.()} />
    </Drawer>
  )
}

export { DrawerMenu }
