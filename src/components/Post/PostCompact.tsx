import { PostSummary } from '@/types'
import { Card, Typography } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  post: PostSummary
}

const PostCompact: FC<Props> = ({ className, post }) => {
  return (
    <Card className={twMerge('', className)}>
      <Typography.Title level={5}>{post.title}</Typography.Title>
    </Card>
  )
}

export { PostCompact }
