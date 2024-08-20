import { Layout, MenuProps, theme } from 'antd'
import { FC, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Logo } from '../Logo'
import { Author, AvatarDropdown } from '../Avatar'
import { HEADER_AVATAR_DROPDOWN_ITEMS } from '@/constants'

type Props = {
  className?: string
}

const AdminHeader: FC<Props> = ({ className }) => {
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
    </Layout.Header>
  )
}

export { AdminHeader }
