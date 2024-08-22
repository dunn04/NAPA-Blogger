import { PostSimplify } from '@/types'
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Card, CardProps, Popconfirm, Space, Typography } from 'antd'
import { FC, ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Author } from '../Avatar'
import { limitTextToWords, makeBeautyDate } from '@/utils'

type Props = {
  post: PostSimplify
} & CardProps

const PostApproved: FC<Props> = ({ className, post, ...props }) => {
  const Actions: ReactNode[] = useMemo(() => {
    return [
      <CheckCircleOutlined />,
      <Popconfirm title='Are you want to delete?'>
        <DeleteOutlined />
      </Popconfirm>
    ]
  }, [])

  return (
    <Card
      className={twMerge('transition-all', className)}
      actions={Actions}
      title={<Author author={post.author} />}
      {...props}
    >
      <Space direction='vertical'>
        <Typography.Title level={5}>{post.title}</Typography.Title>
        <Typography.Paragraph>{limitTextToWords(post.shortContent, 20)}</Typography.Paragraph>
        <Typography.Text type='secondary'>{makeBeautyDate(post.publishedAt)}</Typography.Text>
      </Space>
    </Card>
  )
}

export { PostApproved }
