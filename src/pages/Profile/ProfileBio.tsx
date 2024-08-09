import { UserInfo } from '@/types'
import { TeamOutlined, WifiOutlined } from '@ant-design/icons'
import { Card, Typography, Divider, Space } from 'antd'
import { FC } from 'react'

type Props = {
  className?: string
  user: UserInfo
}

const ProfileBio: FC<Props> = ({ className, user }) => {
  return (
    <Card className={className}>
      <Typography.Title level={5}>About</Typography.Title>
      <Typography.Text>{user.bio}</Typography.Text>
      <Divider />
      <Space className='w-full'>
        <TeamOutlined />
        <Typography.Text>
          Have <Typography.Text strong>{user.followers}</Typography.Text> followers
        </Typography.Text>
      </Space>
      <Space>
        <WifiOutlined />
        <Typography.Text>
          Following <Typography.Text strong>{user.following}</Typography.Text>
        </Typography.Text>
      </Space>
    </Card>
  )
}

export { ProfileBio }
