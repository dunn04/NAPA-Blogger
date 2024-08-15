import { MenuProps } from 'antd'
import { ROUTE_PATHS } from './routes'
import { HomeOutlined, SettingOutlined, TagsOutlined, WifiOutlined } from '@ant-design/icons'

const HEADER_AVATAR_DROPDOWN_ITEMS: Required<MenuProps>['items'] = [
  {
    key: ROUTE_PATHS.MY_BLOGS.ROOT,
    label: 'My blogs'
  },
  {
    key: ROUTE_PATHS.MY_BLOGS.SAVED,
    label: 'Saved blogs'
  },
  {
    key: ROUTE_PATHS.CREATE_NEW_BLOG,
    label: 'Create new blog'
  },
  {
    key: ROUTE_PATHS.SETTINGS.ROOT,
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

const SIDE_BAR_MENU_ITEMS: Required<MenuProps>['items'] = [
  {
    key: ROUTE_PATHS.HOME,
    label: 'Home',
    icon: <HomeOutlined />
  },
  {
    key: ROUTE_PATHS.POPULAR_POST,
    label: 'Popular post',
    icon: <WifiOutlined />
  },
  {
    key: ROUTE_PATHS.TAGS.ROOT,
    label: 'Tags',
    icon: <TagsOutlined />
  },
  {
    key: ROUTE_PATHS.SETTINGS.ROOT,
    label: 'Settings',
    icon: <SettingOutlined />
  }
]

export { HEADER_AVATAR_DROPDOWN_ITEMS, SIDE_BAR_MENU_ITEMS }
