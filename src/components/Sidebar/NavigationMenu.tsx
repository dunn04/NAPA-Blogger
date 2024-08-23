import { ADMIN_SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ITEMS } from '@/constants'
import { Menu } from 'antd'
import { FC, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  onItemClick?: (key: string) => void
}

const NavigationMenu: FC<Props> = ({ className, onItemClick }) => {
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
    onItemClick?.(key)
    navigate(key)
  }
  return (
    <Menu
      items={NAV_ITEMS}
      className={twMerge('!border-none', className)}
      selectedKeys={selectKeys}
      onClick={(info) => handleMenuClick(info.key)}
    />
  )
}

export { NavigationMenu }
