import { SIDE_BAR_MENU_ITEMS } from '@/constants'
import { Layout, Menu, theme } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Sidebar: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()
  return (
    <Layout.Sider
      collapsedWidth={80}
      collapsed
      style={{
        backgroundColor: token.colorBgContainer
      }}
      width={240}
      className={twMerge('shadow-sm', className)}
    >
      <Menu items={SIDE_BAR_MENU_ITEMS} className='h-full !border-r-0' selectedKeys={[location.pathname]} />
    </Layout.Sider>
  )
}

export { Sidebar }
