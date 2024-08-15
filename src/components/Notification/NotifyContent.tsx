import { NOTIFICATIONS } from '@/constants'
import { List, Space, Typography } from 'antd'
import { FC } from 'react'
import { NotifyItem } from './NotifyItem'
import { NotificationOfUser } from '@/types'

type Props = {
  className?: string
}

const NotifyContent: FC<Props> = () => {
  return (
    <Space direction='vertical' className='w-full max-h-96 overflow-y-scroll'>
      <Typography.Title level={5}>Notification</Typography.Title>
      <List
        bordered={false}
        dataSource={NOTIFICATIONS}
        renderItem={(notify) => (
          <List.Item className='!py-0'>
            <NotifyItem notify={notify as NotificationOfUser} />
          </List.Item>
        )}
        rowKey='id'
      />
    </Space>
  )
}

export { NotifyContent }
