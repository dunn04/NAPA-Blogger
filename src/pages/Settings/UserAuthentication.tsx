import { SettingItem } from '@/components'
import { Space, Typography } from 'antd'
import { FC } from 'react'
import { ChangePassword } from './ChangePassword'

const UserAuthentication: FC = () => {
  return (
    <Space direction='vertical' className='w-full'>
      <Typography.Title level={4}>Account</Typography.Title>
      <SettingItem.Input title='Email' value='dunn@gmail.com' />
      <SettingItem.Modal
        title='Change password'
        value='********'
        content={<ChangePassword />}
        modalProps={{
          title: 'Change password'
        }}
      />
    </Space>
  )
}

export { UserAuthentication }
