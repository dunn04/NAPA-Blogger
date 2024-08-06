import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { configRoute } from './configRoute'

const RenderRouter: FC = () => {
  const element = useRoutes(configRoute)

  return element
}

export { RenderRouter }
