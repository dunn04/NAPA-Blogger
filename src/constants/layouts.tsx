import { MenuProps } from 'antd'
import { ROUTE_PATHS } from './routes'
import { HomeOutlined, WifiOutlined } from '@ant-design/icons'

const HEADER_AVATAR_DROPDOWN_ITEMS: MenuProps['items'] = [
  {
    key: 'my-blogs',
    label: 'My blogs'
  },
  {
    key: 'saved-blogs',
    label: 'Saved blogs'
  },
  {
    key: 'create-new-blog',
    label: 'Create new blog'
  },
  {
    key: 'settings',
    label: 'Settings'
  },
  {
    key: 'divider',
    type: 'divider'
  },
  {
    key: 'logout',
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
