import { PostSimplify } from '@/types'
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Card, CardProps, Popconfirm, Space, Typography } from 'antd'
import { FC, ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Author } from '../Avatar'
import { limitTextToWords, makeBeautyDate } from '@/utils'
import { ROUTE_ACTIONS } from '@/constants'
import { Link } from 'react-router-dom'

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
        <Typography.Title level={5}>
          <Link
            to={ROUTE_ACTIONS.BLOG_PREVIEW_WITH_ID(`${post.id}`)}
            className='!text-ant-text-color transition-colors hover:!text-ant-primary'
            target='_blank'
          >
            {post.title}
          </Link>
        </Typography.Title>
        <Typography.Paragraph>{limitTextToWords(post.shortContent, 20)}</Typography.Paragraph>
        <Typography.Text type='secondary'>{makeBeautyDate(post.publishedAt)}</Typography.Text>
      </Space>
    </Card>
  )
}

export { PostApproved }
