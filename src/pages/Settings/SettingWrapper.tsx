import { ROUTE_PATHS, SETTINGS_USER_NAVIGATION } from '@/constants'
import { Tabs } from 'antd'
import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SettingWrapper: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const activeKey = location.pathname

  const handleNavigate = (key: string) => {
    navigate(key)
  }

  useEffect(() => {
    if (location.pathname === ROUTE_PATHS.SETTINGS.ROOT) navigate(ROUTE_PATHS.SETTINGS.PROFILE)
  }, [location, navigate])

  return (
    <div className='max-w-4xl mx-auto'>
      <Tabs items={SETTINGS_USER_NAVIGATION} activeKey={activeKey} onChange={handleNavigate} />
    </div>
  )
}

export { SettingWrapper }
