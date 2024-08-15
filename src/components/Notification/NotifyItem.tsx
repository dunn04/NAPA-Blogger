import { NotificationOfUser } from '@/types'
import { makeBeautyDate } from '@/utils'
import { Avatar, Flex, Typography } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  notify: NotificationOfUser
}

const NotifyItem: FC<Props> = ({ className, notify }) => {
  return (
    <Flex
      className={twMerge(
        'px-4 py-2 cursor-pointer transition hover:bg-slate-100 rounded-md w-full',
        notify.status === 'unread' && 'bg-slate-100',
        className
      )}
      gap={14}
      align='center'
    >
      <Avatar src={notify.from.avatar} alt={notify.from.name} size='large' className='flex-shrink-0' />
      <div className='flex-1'>
        <Typography.Text className='block'>{notify.content}</Typography.Text>
        <Typography.Text className='block text-xs' type='secondary'>
          {makeBeautyDate(notify.createdAt)}
        </Typography.Text>
      </div>
    </Flex>
  )
}

export { NotifyItem }
