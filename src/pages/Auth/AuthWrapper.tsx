import { theme, Card } from 'antd'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AuthWrapper: FC = () => {
  const { token } = theme.useToken()
  return (
    <main
      className='w-full h-screen flex justify-center items-center'
      style={{
        backgroundColor: token.colorPrimaryBg
      }}
    >
      <Card className='max-w-md mx-auto w-full'>
        <Outlet />
      </Card>
    </main>
  )
}

export { AuthWrapper }
