import { ROUTE_PATHS } from '@/constants'
import { HomePage } from '@/pages'
import { RouteObject } from 'react-router-dom'

const configRoute: RouteObject[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: <HomePage />
  }
]

export { configRoute }
