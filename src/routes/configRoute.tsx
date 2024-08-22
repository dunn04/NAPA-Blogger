import { ROUTE_PATHS } from '@/constants'
import { MainLayout } from '@/Layouts'
import {
  AuthWrapper,
  CreateBlogPage,
  DashboardPage,
  DraftBlogs,
  EditBlogPage,
  FilterBlogsPage,
  HomePage,
  LoginPage,
  MyBlogWrapper,
  NotFoundPage,
  PopularPostPage,
  PostDetailPage,
  ProfilePage,
  PublishedBlog,
  SavedBlogs,
  SettingWrapper,
  SignUpPage,
  TagsPage,
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
      },
      {
        path: ROUTE_PATHS.MY_BLOGS.EDIT,
        element: <WrapperRoute element={<EditBlogPage />} auth />
      },
      {
        path: ROUTE_PATHS.TAGS.ROOT,
        element: <WrapperRoute element={<TagsPage />} />
      },
      {
        path: ROUTE_PATHS.BLOG_FILTER.WITH_FILTER,
        element: <WrapperRoute element={<FilterBlogsPage />} />
      },
      {
        path: ROUTE_PATHS.DASHBOARD,
        element: <DashboardPage />
      }
    ]
  },
  {
    element: <AuthWrapper />,
    children: [
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />
      },
      {
        path: ROUTE_PATHS.SIGNUP,
        element: <SignUpPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export { configRoute }
