import { ROUTE_PATHS } from '@/constants'
import { MainLayout } from '@/Layouts'
import { HomePage, NotFoundPage, PostDetailPage, ProfilePage } from '@/pages'
import { RouteObject } from 'react-router-dom'
import { WrapperRoute } from './WrapperRoute'

const configRoute: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <WrapperRoute element={<HomePage />} auth />
      },
      {
        path: ROUTE_PATHS.BLOG_DETAIL.WITH_ID,
        element: <WrapperRoute element={<PostDetailPage />} auth />
      },
      {
        path: ROUTE_PATHS.PROFILE.WITH_ID,
        element: <WrapperRoute element={<ProfilePage />} auth />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export { configRoute }
