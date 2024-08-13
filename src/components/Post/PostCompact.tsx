import { PostSummary } from '@/types'
import { limitTextToWords, makeBeautyDate } from '@/utils'
import { Card, Typography } from 'antd'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Author } from '../Avatar'

export type PostCompactProps = {
  className?: string
  post: PostSummary
  extra?: ReactNode
  to?: string
  withAuthor?: boolean
}

const PostCompact: FC<PostCompactProps> = ({ className, post, extra, to = '#', withAuthor = false }) => {
  return (
    <Card
      title={withAuthor && <Author author={post.author} />}
      hoverable
      className={twMerge('cursor-default', className)}
      extra={extra}
    >
      <Link to={to}>
        <Typography.Title level={5}>{limitTextToWords(post.title, 30)}</Typography.Title>
      </Link>
      <Typography.Text type='secondary'>{makeBeautyDate(post.updatedAt)}</Typography.Text>
    </Card>
  )
}

export { PostCompact }
