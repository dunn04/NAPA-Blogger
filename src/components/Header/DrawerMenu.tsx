import { Button, Drawer, DrawerProps, Flex } from 'antd'
import { FC } from 'react'
import { Logo } from '../Logo'
import { NavigationMenu } from '../Sidebar'
import { MenuFoldOutlined } from '@ant-design/icons'

type Props = DrawerProps

const DrawerMenu: FC<Props> = ({ ...props }) => {
  const Title = (
    <Flex align='center' justify='space-between'>
      <Logo sizes='sm' />
      <Button type='text' onClick={props.onClose}>
        <MenuFoldOutlined />
      </Button>
    </Flex>
  )
  return (
    <Drawer placement='left' title={Title} closeIcon={null} {...props}>
      <NavigationMenu className='' />
    </Drawer>
  )
}

export { DrawerMenu }
