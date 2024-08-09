import { ROUTE_PATHS } from '@/constants'
import { Button, Flex, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate(ROUTE_PATHS.HOME)
  }

  return (
    <Result status='404' title='404' subTitle='Sorry, the page you visited does not exist.'>
      <Flex justify='center' align='center'>
        <Button type='primary' onClick={handleBackToHome}>
          Back to home
        </Button>
      </Flex>
    </Result>
  )
}

export { NotFoundPage }
