import { SIDE_BAR_MENU_ITEMS } from '@/constants'
import { Layout, Menu, theme } from 'antd'
import { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Sidebar: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()
  const location = useLocation()
  const selectKeys = useMemo(() => {
    const key = SIDE_BAR_MENU_ITEMS?.find((item) => {
      console.log('Key: ' + item?.key?.toString())
      console.log(location.pathname.indexOf(item?.key?.toString() || '-1'))
      return location.pathname.indexOf(item?.key?.toString() || '-1') === 0
    })?.key?.toString()
    return key ? [key] : []
  }, [location])
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
      <Menu items={SIDE_BAR_MENU_ITEMS} className='h-full !border-r-0' selectedKeys={selectKeys} />
    </Layout.Sider>
  )
}

export { Sidebar }
