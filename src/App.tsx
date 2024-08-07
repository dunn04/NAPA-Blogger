import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RenderRouter } from './routes'
import { ThemeCustom } from './providers'

const App: FC = () => {
  return (
    <ThemeCustom>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </ThemeCustom>
  )
}
export default App
