import { ADMIN_SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ITEMS } from '@/constants'
import { Layout, Menu, theme } from 'antd'
import { FC, memo, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Instance: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()
  const location = useLocation()
  const navigate = useNavigate()

  const NAV_ITEMS = useMemo(() => {
    return [...ADMIN_SIDEBAR_MENU_ITEMS, ...SIDE_BAR_MENU_ITEMS]
  }, [])

  const selectKeys = useMemo(() => {
    const keys = NAV_ITEMS.map((item) => item?.key?.toString() || '')
      .filter((key) => location.pathname.startsWith(key))
      .sort((a, b) => b.length - a.length)

    return keys[0] ? [keys[0]] : []
  }, [location, NAV_ITEMS])

  const handleMenuClick = (key: string) => {
    navigate(key)
  }

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
      <Menu
        items={NAV_ITEMS}
        className='h-full !border-r-0'
        selectedKeys={selectKeys}
        onClick={(info) => handleMenuClick(info.key)}
      />
    </Layout.Sider>
  )
}

const Sidebar = memo(Instance)

export { Sidebar }
