import { TabsProps } from 'antd'
import { Outlet } from 'react-router-dom'
import { ROUTE_PATHS } from './routes'

const MY_BLOG_NAVIGATION_ITEM: TabsProps['items'] = [
  {
    key: ROUTE_PATHS.MY_BLOGS.DRAFT,
    label: 'Draft',
    children: <Outlet />
  },
  {
    key: ROUTE_PATHS.MY_BLOGS.PUBLISHED,
    label: 'Published',
    children: <Outlet />
  },
  {
    key: ROUTE_PATHS.MY_BLOGS.SAVED,
    label: 'Saved',
    children: <Outlet />
  }
]

export { MY_BLOG_NAVIGATION_ITEM }
