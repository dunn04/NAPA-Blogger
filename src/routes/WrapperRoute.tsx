import { FC, ReactElement } from 'react'
import { RouteProps } from 'react-router-dom'
import { PublicRoutes } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export type WrapperRouteProps = RouteProps & {
  auth?: boolean | null
}

const WrapperRoute: FC<WrapperRouteProps> = ({ auth, ...props }) => {
  return auth === null ? (
    <PublicRoutes {...props} />
  ) : auth === true ? (
    <PrivateRoute {...props} />
  ) : (
    (props.element as ReactElement)
  )
}

export { WrapperRoute }
