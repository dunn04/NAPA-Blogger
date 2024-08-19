import { ROUTE_PATHS } from '@/constants'
import { Button, Divider, Form, Input, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const SignUpForm: FC<Props> = ({ className }) => {
  return (
    <Form layout='vertical' className={twMerge('', className)}>
      <Form.Item>
        <Typography.Title level={2}>Sign Up</Typography.Title>
      </Form.Item>
      <Form.Item label='Name'>
        <Input />
      </Form.Item>
      <Form.Item label='Email'>
        <Input />
      </Form.Item>
      <Form.Item label='Password'>
        <Input.Password />
      </Form.Item>
      <Form.Item label='Confirm Password'>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit'>
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item>
        <Divider>Or</Divider>
      </Form.Item>
      <Form.Item className='text-center'>
        <Typography.Text>
          Already have an account? <Link to={ROUTE_PATHS.LOGIN}>Login</Link>
        </Typography.Text>
      </Form.Item>
    </Form>
  )
}

export { SignUpForm }
