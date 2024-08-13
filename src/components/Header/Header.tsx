import { Button, Input, Layout, MenuProps, Space, theme } from 'antd'
import { FC, useMemo } from 'react'
import { Logo } from '../Logo'
import { Author, AvatarDropdown } from '../Avatar'
import { PlusOutlined } from '@ant-design/icons'
import { HEADER_AVATAR_DROPDOWN_ITEMS, ROUTE_PATHS } from '@/constants'
import { twMerge } from 'tailwind-merge'
import { Link, useNavigate } from 'react-router-dom'
import { NotifyPopover } from '../Notification'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()
  const navigate = useNavigate()
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

  const handleMenuClick = (key: string) => {
    const map = {
      [ROUTE_PATHS.MY_BLOGS.ROOT]: () => navigate(ROUTE_PATHS.MY_BLOGS.ROOT),
      [ROUTE_PATHS.SETTINGS.ROOT]: () => navigate(ROUTE_PATHS.SETTINGS.ROOT),
      [ROUTE_PATHS.MY_BLOGS.SAVED]: () => navigate(ROUTE_PATHS.MY_BLOGS.SAVED),
      [ROUTE_PATHS.LOGOUT]: () => {
        // TODO handle logout
      }
    }

    map[key]?.()
  }

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
            ],
            onClick: (info) => handleMenuClick(info.key)
          }}
        />
      </Space>
    </Layout.Header>
  )
}

export { Header }
