import { MY_BLOG_NAVIGATION_ITEM, ROUTE_PATHS } from '@/constants'
import { ContentLayout } from '@/Layouts'
import { Tabs } from 'antd'
import { createContext, FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface LayoutState {
  title: string
  description: string
}

interface IMyBlogContext {
  layoutState: LayoutState
  setLayoutState: React.Dispatch<React.SetStateAction<LayoutState>>
}

export const MyBlogContext = createContext<IMyBlogContext | undefined>(undefined)

const MyBlogWrapper: FC = () => {
  const [layoutState, setLayoutState] = useState<LayoutState>({
    title: '',
    description: ''
  })

  const location = useLocation()
  const navigate = useNavigate()
  const tabActiveKey = location.pathname

  const handleMenuClick = (key: string) => {
    navigate(key)
  }

  useEffect(() => {
    if (location.pathname === ROUTE_PATHS.MY_BLOGS.ROOT) navigate(ROUTE_PATHS.MY_BLOGS.DRAFT)
  }, [location.pathname, navigate])

  return (
    <MyBlogContext.Provider
      value={{
        layoutState,
        setLayoutState
      }}
    >
      <ContentLayout title={layoutState.title} description={layoutState.description}>
        <Tabs items={MY_BLOG_NAVIGATION_ITEM} activeKey={tabActiveKey} className='w-full' onChange={handleMenuClick} />
      </ContentLayout>
    </MyBlogContext.Provider>
  )
}

export { MyBlogWrapper }
