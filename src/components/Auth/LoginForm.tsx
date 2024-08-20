import { ROUTE_PATHS } from '@/constants'
import { Button, Divider, Form, Input, Space, Typography } from 'antd'
import { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Logo } from '../Logo'

type Props = {
  className?: string
  style?: CSSProperties
}

const LoginForm: FC<Props> = ({ className }) => {
  return (
    <Form layout='vertical' className={twMerge('', className)}>
      <Form.Item>
        <Space>
          <Logo sizes='sm' />
          <Typography.Title className='!mb-0' level={2}>
            Login
          </Typography.Title>
        </Space>
      </Form.Item>
      <Form.Item label='Email'>
        <Input />
      </Form.Item>
      <Form.Item label='Password'>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
      <Form.Item>
        <Divider>Or</Divider>
      </Form.Item>
      <Form.Item className='text-center'>
        <Typography.Text>
          Don't have an account? <Link to={ROUTE_PATHS.SIGNUP}>Sign up</Link>
        </Typography.Text>
      </Form.Item>
    </Form>
  )
}

export { LoginForm }
