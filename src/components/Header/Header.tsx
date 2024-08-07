import { Button, Input, Layout, Space, theme } from 'antd'
import { FC } from 'react'
import { Logo } from '../Logo'
import { AvatarDropdown } from '../Avatar'
import { NotificationOutlined, PlusOutlined } from '@ant-design/icons'
import { HEADER_AVATAR_DROPDOWN_ITEMS } from '@/constants'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()
  return (
    <Layout.Header
      style={{
        backgroundColor: token.colorBgContainer
      }}
      className={twMerge('flex items-center justify-between px-4', className)}
    >
      <Logo sizes='sm' />
      <Input.Search className='max-w-md' placeholder='Search blog...' />
      <Space className=''>
        <Button icon={<PlusOutlined />} type='text'>
          Create
        </Button>
        <Button type='text'>
          <NotificationOutlined />
        </Button>
        <AvatarDropdown
          user={{
            avatar: 'https://avatars.githubusercontent.com/u/44036559?v=4',
            id: 1,
            name: 'Dunn'
          }}
          menu={{
            items: HEADER_AVATAR_DROPDOWN_ITEMS
          }}
        />
      </Space>
    </Layout.Header>
  )
}

export { Header }
