import { AdminHeader, Footer, Sidebar } from '@/components'
import { useScrollTop } from '@/hooks'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  useScrollTop()
  return (
    <main>
      <AdminHeader className='fixed z-[999] h-16 top-0 left-0 right-0' />
      <Sidebar className='fixed z-[999] top-16 left-0 bottom-0 overflow-y-auto' />
      <Layout.Content className='p-2 mt-16 ml-20'>
        <Outlet />
      </Layout.Content>
      <Footer />
    </main>
  )
}

export { AdminLayout }
