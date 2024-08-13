import { PostSummary } from '@/types'
import { limitTextToWords, makeBeautyDate } from '@/utils'
import { Card, Typography } from 'antd'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export type PostCompactProps = {
  className?: string
  post: PostSummary
  extra?: ReactNode
  to?: string
}

const PostCompact: FC<PostCompactProps> = ({ className, post, extra, to = '#' }) => {
  return (
    <Card hoverable className={twMerge('cursor-default', className)} extra={extra}>
      <Link to={to}>
        <Typography.Title level={5}>{limitTextToWords(post.title, 30)}</Typography.Title>
      </Link>
      <Typography.Text type='secondary'>{makeBeautyDate(post.updatedAt)}</Typography.Text>
    </Card>
  )
}

export { PostCompact }
