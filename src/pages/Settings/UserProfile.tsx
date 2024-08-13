import { SettingItem } from '@/components'
import { Space, Typography } from 'antd'
import { FC } from 'react'

const UserProfile: FC = () => {
  return (
    <Space direction='vertical' wrap className='w-full'>
      <Typography.Title level={4}>Profile</Typography.Title>
      <SettingItem.Input
        title='Name'
        value='Dung Le The'
        subTitle='Your name'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna.'
      />
      <SettingItem.Input
        title='Bio'
        value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna.'
        subTitle='Your bio'
      />
      <SettingItem.Avatar
        title='Avatar'
        subTitle='Your avatar'
        value='https://i.pinimg.com/564x/20/0f/50/200f509408e5ae122d1a45d110f2faa2.jpg'
      />
    </Space>
  )
}

export { UserProfile }
