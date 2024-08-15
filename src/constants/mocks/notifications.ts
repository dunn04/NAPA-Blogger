import { NotificationOfUser } from '@/types'

const NOTIFICATION: NotificationOfUser = {
  id: 1,
  url: '/post/1',
  type: 'comment',
  content: 'Hello, this is a comment',
  from: {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pinimg.com/564x/1d/a8/67/1da867c7840b87abbf76cd71d341905b.jpg'
  },
  createdAt: Date.now(),
  updatedAt: Date.now(),
  status: 'unread'
}

const NOTIFICATIONS = Array.from({ length: 10 }, (_, i) => ({
  ...NOTIFICATION,
  id: i + 1,
  status: i % 2 === 0 ? 'read' : 'unread'
}))

export { NOTIFICATIONS }
