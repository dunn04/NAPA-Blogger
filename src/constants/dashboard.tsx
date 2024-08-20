import { MenuProps } from 'antd'
import { ROUTE_PATHS } from './routes'
import { DashboardOutlined } from '@ant-design/icons'

const ADMIN_SIDEBAR_MENU_ITEMS: Required<MenuProps>['items'] = [
  {
    key: ROUTE_PATHS.DASHBOARD,
    label: 'Dashboard',
    icon: <DashboardOutlined />
  }
]

export { ADMIN_SIDEBAR_MENU_ITEMS }
