import { FC, ReactElement } from 'react'
import { RouteProps } from 'react-router-dom'

const PublicRoutes: FC<RouteProps> = ({ element }) => {
  return element as ReactElement
}

export { PublicRoutes }
