import { PostSummary } from '@/types'
import { PostCompact, PostCompactProps } from './PostCompact'
import { Button, Empty, List, Typography } from 'antd'
import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants'

type Props = {
  className?: string
  posts: PostSummary[]
  postProps?: Omit<PostCompactProps, 'post' | 'extra' | 'to'> & {
    extra?: (post: PostSummary) => React.ReactNode
    to?: (post: PostSummary) => string
  }
}

const ListPostCompact: FC<Props> = ({ posts, className, postProps }) => {
  const navigate = useNavigate()

  const goToCreatePost = () => {
    navigate(ROUTE_PATHS.CREATE_NEW_BLOG)
  }

  const gotoHome = () => {
    navigate(ROUTE_PATHS.HOME)
  }

  if (posts.length === 0)
    return (
      <Empty description={<Typography.Text type='secondary'>Not found any post.</Typography.Text>}>
        <Button type='link' onClick={goToCreatePost}>
          Create new post
        </Button>
        <Typography.Text type='secondary'>or</Typography.Text>
        <Button type='link' onClick={gotoHome}>
          View other posts
        </Button>
      </Empty>
    )

  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
        md: 3,
        sm: 1,
        xs: 1
      }}
      className={twMerge('w-full', className)}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <PostCompact
            post={post}
            {...postProps}
            extra={postProps?.extra && postProps.extra?.(post)}
            to={postProps?.to?.(post)}
          />
        </List.Item>
      )}
      rowKey='id'
    />
  )
}

export { ListPostCompact }
