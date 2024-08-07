import { PostSimplify } from '@/types'
import { Badge, Card, Flex, Image, Space, Typography } from 'antd'
import { FC, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Author } from '../Avatar'
import { ToggleBookmark } from '../Button'
import { PostShareDropdown } from './PostShareDropdown'
import { limitTextToWords, makeBeautyDate } from '@/utils'
import { Link } from 'react-router-dom'
import { ROUTE_ACTIONS } from '@/constants'

type Props = {
  className?: string
  post: PostSimplify
}

const LIMIT_WORDS = 20

const SimplifyPost: FC<Props> = ({ className, post }) => {
  const { author } = post
  const content = useMemo(() => limitTextToWords(post.shortContent, LIMIT_WORDS), [post.shortContent])
  return (
    <Badge.Ribbon text={post.category.name} rootClassName={twMerge(className)}>
      <Card>
        <Flex className='mt-2'>
          <Author author={author} avatarSize='large' />
          <Space className='ml-auto'>
            <ToggleBookmark />
            <PostShareDropdown />
          </Space>
        </Flex>
        <Flex gap={14} className='mt-2'>
          <div className='flex-1'>
            <Link to={ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${post.id}`)}>
              <Typography.Title level={3}>{post.title}</Typography.Title>
            </Link>
            <Typography.Text className='opacity-75'>{content}</Typography.Text>
          </div>
          <div className='hidden lg:flex'>
            <Image width={200} src={post.background} alt={post.title} className='object-cover rounded-md' />
          </div>
        </Flex>
        <Space className='mt-4'>
          <Typography.Text>{makeBeautyDate(post.publishedAt)}</Typography.Text>
        </Space>
      </Card>
    </Badge.Ribbon>
  )
}

export { SimplifyPost }
