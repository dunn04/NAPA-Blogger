import { ConfigProvider } from 'antd'
import { FC, PropsWithChildren } from 'react'

const ThemeCustom: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Poppins', 'sans-serif'"
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export { ThemeCustom }
