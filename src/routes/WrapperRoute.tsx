import { FC, ReactElement } from 'react'
import { RouteProps } from 'react-router-dom'
import { PublicRoutes } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { AdminRoutes } from './AdminRoute'

export type WrapperRouteProps = RouteProps & {
  auth?: boolean | null
  admin?: boolean
}

const WrapperRoute: FC<WrapperRouteProps> = ({ auth, admin, ...props }) => {
  if (admin) return <AdminRoutes {...props} />

  return auth === null ? (
    <PublicRoutes {...props} />
  ) : auth === true ? (
    <PrivateRoute {...props} />
  ) : (
    (props.element as ReactElement)
  )
}

export { WrapperRoute }
