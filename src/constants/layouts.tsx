import { MenuProps } from 'antd'
import { ROUTE_PATHS } from './routes'
import { HomeOutlined, WifiOutlined } from '@ant-design/icons'

const HEADER_AVATAR_DROPDOWN_ITEMS: Required<MenuProps>['items'] = [
  {
    key: ROUTE_PATHS.MY_BLOGS.ROOT,
    label: 'My blogs'
  },
  {
    key: ROUTE_PATHS.SAVED_BLOGS,
    label: 'Saved blogs'
  },
  {
    key: ROUTE_PATHS.CREATE_NEW_BLOG,
    label: 'Create new blog'
  },
  {
    key: ROUTE_PATHS.SETTINGS,
    label: 'Settings'
  },
  {
    key: 'divider',
    type: 'divider'
  },
  {
    key: ROUTE_PATHS.LOGOUT,
    label: 'Logout'
  }
]

const SIDE_BAR_MENU_ITEMS: MenuProps['items'] = [
  {
    key: ROUTE_PATHS.HOME,
    label: 'Home',
    icon: <HomeOutlined />
  },
  {
    key: ROUTE_PATHS.POPULAR_POST,
    label: 'Popular post',
    icon: <WifiOutlined />
  }
]

export { HEADER_AVATAR_DROPDOWN_ITEMS, SIDE_BAR_MENU_ITEMS }
