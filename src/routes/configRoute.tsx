import { ROUTE_PATHS } from '@/constants'
import { MainLayout } from '@/Layouts'
import {
  CreateBlogPage,
  DraftBlogs,
  HomePage,
  MyBlogWrapper,
  NotFoundPage,
  PopularPostPage,
  PostDetailPage,
  ProfilePage,
  PublishedBlog,
  SavedBlogs,
  SettingWrapper,
  UserAuthentication,
  UserProfile
} from '@/pages'
import { RouteObject } from 'react-router-dom'
import { WrapperRoute } from './WrapperRoute'

const configRoute: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <WrapperRoute element={<HomePage />} />
      },
      {
        path: ROUTE_PATHS.POPULAR_POST,
        element: <WrapperRoute element={<PopularPostPage />} />
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
        element: <WrapperRoute element={<MyBlogWrapper />} auth />,
        children: [
          {
            path: ROUTE_PATHS.MY_BLOGS.DRAFT,
            element: <DraftBlogs />
          },
          {
            path: ROUTE_PATHS.MY_BLOGS.PUBLISHED,
            element: <PublishedBlog />
          },
          {
            path: ROUTE_PATHS.MY_BLOGS.SAVED,
            element: <SavedBlogs />
          }
        ]
      },
      {
        path: ROUTE_PATHS.SETTINGS.ROOT,
        element: <WrapperRoute element={<SettingWrapper />} auth />,
        children: [
          {
            path: ROUTE_PATHS.SETTINGS.PROFILE,
            element: <UserProfile />
          },
          {
            path: ROUTE_PATHS.SETTINGS.AUTHENTICATION,
            element: <UserAuthentication />
          }
        ]
      },
      {
        path: ROUTE_PATHS.CREATE_NEW_BLOG,
        element: <WrapperRoute element={<CreateBlogPage />} auth />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export { configRoute }
