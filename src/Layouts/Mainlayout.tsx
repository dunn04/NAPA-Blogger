import { Footer, Header, Sidebar } from '@/components'
import { Layout } from 'antd'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <div>
      <Header className='h-16 z-[999] fixed left-0 right-0 top-0' />
      <Sidebar className='fixed z-[999] top-16 left-0 bottom-0 overflow-y-auto' />
      <Layout.Content className='p-2 mt-24 ml-20'>
        <Outlet />
      </Layout.Content>
      <Footer />
    </div>
  )
}

export { MainLayout }
