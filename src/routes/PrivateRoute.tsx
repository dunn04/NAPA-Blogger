import { FC, ReactElement } from 'react'
import { RouteProps } from 'react-router-dom'

const PrivateRoute: FC<RouteProps> = ({ element }) => {
  return element as ReactElement
}

export { PrivateRoute }
