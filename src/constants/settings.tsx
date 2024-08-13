import { TabsProps } from 'antd'
import { ROUTE_PATHS } from './routes'
import { Outlet } from 'react-router-dom'

const SETTINGS_USER_NAVIGATION: TabsProps['items'] = [
  {
    key: ROUTE_PATHS.SETTINGS.PROFILE,
    label: 'Profile',
    children: <Outlet />
  },
  {
    key: ROUTE_PATHS.SETTINGS.AUTHENTICATION,
    label: 'Authentication',
    children: <Outlet />
  }
]

export { SETTINGS_USER_NAVIGATION }
