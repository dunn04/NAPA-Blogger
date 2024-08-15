import { Timestamped } from '../common'
import { Author } from '../users'

export type NotificationType = 'comment' | 'like' | 'follow' | 'share'
export type NotificationStatus = 'read' | 'unread'
export interface Notifications extends Timestamped {
  id: number
  url: string
  type: NotificationType
  content: string
  authorId: number
  fromId: number
  status: NotificationStatus
}

export type NotificationOfUser = Omit<Notifications, 'fromId' | 'authorId'> & {
  from: Author
}
