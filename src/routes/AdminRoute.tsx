import { FC, ReactElement } from 'react'
import { RouteProps } from 'react-router-dom'

const AdminRoutes: FC<RouteProps> = ({ element }) => {
  return element as ReactElement
}

export { AdminRoutes }
