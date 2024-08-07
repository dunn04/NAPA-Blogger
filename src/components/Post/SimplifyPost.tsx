import { PostSimplify } from '@/types'
import { Badge, Card, Flex, Image, Space, Typography } from 'antd'
import { FC, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Author } from '../Avatar'
import { ToggleBookmark } from '../Button'
import { PostShareDropdown } from './PostShareDropdown'
import { limitTextToWords, makeBeautyDate } from '@/utils'

type Props = {
  className?: string
  post: PostSimplify
}

const LIMIT_WORDS = 20

const SimplifyPost: FC<Props> = ({ className, post }) => {
  const { author } = post
  const content = useMemo(() => limitTextToWords(post.content, LIMIT_WORDS), [post.content])
  return (
    <Badge.Ribbon text={post.tag.name} color={post.tag.color}>
      <Card className={twMerge(className)}>
        <Flex className='mt-2'>
          <Author author={author} />
          <Space className='ml-auto'>
            <ToggleBookmark />
            <PostShareDropdown />
          </Space>
        </Flex>
        <Flex gap={14} className='mt-2'>
          <div className='flex-1'>
            <Typography.Title level={3}>{post.title}</Typography.Title>
            <Typography.Text className=''>{content}</Typography.Text>
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
