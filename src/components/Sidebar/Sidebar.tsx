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
      collapsed
      style={{
        backgroundColor: token.colorBgContainer
      }}
      width={240}
      className={twMerge('', className)}
    >
      <Menu items={SIDE_BAR_MENU_ITEMS} />
    </Layout.Sider>
  )
}

export { Sidebar }
