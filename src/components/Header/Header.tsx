import { Button, Input, Layout, MenuProps, Space, theme } from 'antd'
import { FC, useMemo } from 'react'
import { Logo } from '../Logo'
import { Author, AvatarDropdown } from '../Avatar'
import { PlusOutlined } from '@ant-design/icons'
import { HEADER_AVATAR_DROPDOWN_ITEMS } from '@/constants'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router-dom'
import { NotifyPopover } from '../Notification'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()

  const authorItem = useMemo<Required<MenuProps>['items'][number]>(() => {
    return {
      key: 'author',
      type: 'item',
      label: (
        <Author
          author={{
            avatar: 'https://avatars.githubusercontent.com/u/44036559?v=4',
            id: 1,
            name: 'Dunn'
          }}
        />
      )
    }
  }, [])

  return (
    <Layout.Header
      style={{
        backgroundColor: token.colorBgContainer
      }}
      className={twMerge('flex items-center justify-between px-4 shadow-sm gap-4', className)}
    >
      <Logo sizes='sm' />
      <Input.Search className='max-w-md' placeholder='Search blog...' />
      <Space className=''>
        <Link to='#' className='hidden md:block'>
          <Button icon={<PlusOutlined />} type='text'>
            Create
          </Button>
        </Link>
        <NotifyPopover />
        <AvatarDropdown
          user={{
            avatar: 'https://avatars.githubusercontent.com/u/44036559?v=4',
            id: 1,
            name: 'Dunn'
          }}
          menu={{
            items: [
              authorItem,
              {
                type: 'divider'
              },
              ...HEADER_AVATAR_DROPDOWN_ITEMS
            ]
          }}
        />
      </Space>
    </Layout.Header>
  )
}

export { Header }
