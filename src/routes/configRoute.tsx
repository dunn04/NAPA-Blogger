import { ROUTE_PATHS } from '@/constants'
import { MainLayout } from '@/Layouts'
import { DraftBlogs, HomePage, MyBlogWrapper, NotFoundPage, PostDetailPage, ProfilePage, PublishedBlog } from '@/pages'
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
      },
      {
        path: ROUTE_PATHS.MY_BLOGS.ROOT,
        element: <WrapperRoute element={<MyBlogWrapper />} />,
        children: [
          {
            path: ROUTE_PATHS.MY_BLOGS.DRAFT,
            element: <DraftBlogs />
          },
          {
            path: ROUTE_PATHS.MY_BLOGS.PUBLISHED,
            element: <PublishedBlog />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export { configRoute }
