import { Layout, theme } from 'antd'
import { FC } from 'react'

type Props = {
  className?: string
}

const Footer: FC<Props> = () => {
  const { token } = theme.useToken()
  return (
    <Layout.Footer
      style={{
        backgroundColor: token.colorBgContainer
      }}
    >
      <div className='text-center'>
        <p>© 2021 Dunn - All rights reserved</p>
      </div>
    </Layout.Footer>
  )
}

export { Footer }
