import { Layout, theme } from 'antd'
import { FC, memo } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavigationMenu } from './NavigationMenu'
import { BREAKPOINTS, useBreakpoint } from '@/hooks'

type Props = {
  className?: string
}

const Instance: FC<Props> = ({ className }) => {
  const { token } = theme.useToken()
  const { width } = useBreakpoint()
  return (
    <Layout.Sider
      collapsedWidth={width <= BREAKPOINTS.sm ? 0 : 80}
      collapsed
      style={{
        backgroundColor: token.colorBgContainer
      }}
      width={240}
      className={twMerge('shadow-sm', className)}
    >
      <NavigationMenu className='h-full !border-r-0' />
    </Layout.Sider>
  )
}

const Sidebar = memo(Instance)

export { Sidebar }
