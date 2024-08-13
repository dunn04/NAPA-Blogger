import { Form, Input } from 'antd'
import { FC } from 'react'

type Props = {
  className?: string
}

const ChangePassword: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Form layout='vertical'>
        <Form.Item label='Old password'>
          <Input.Password />
        </Form.Item>
        <Form.Item label='New password'>
          <Input.Password />
        </Form.Item>
        <Form.Item label='Confirm new password'>
          <Input.Password />
        </Form.Item>
      </Form>
    </div>
  )
}

export { ChangePassword }
