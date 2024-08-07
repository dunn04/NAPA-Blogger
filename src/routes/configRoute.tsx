import { ROUTE_PATHS } from '@/constants'
import { MainLayout } from '@/Layouts'
import { HomePage } from '@/pages'
import { RouteObject } from 'react-router-dom'

const configRoute: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <HomePage />
      }
    ]
  }
]

export { configRoute }
