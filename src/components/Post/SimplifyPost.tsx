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
import { ReportModal } from '../Report'
import { useCopyLink } from '@/hooks'

type Props = {
  className?: string
  post: PostSimplify
  nonImage?: boolean
}

const LIMIT_WORDS = 20

const SimplifyPost: FC<Props> = ({ className, post, nonImage = false }) => {
  const { author } = post
  const content = useMemo(() => limitTextToWords(post.shortContent, LIMIT_WORDS), [post.shortContent])
  const { contextHolder, handleCopyLink } = useCopyLink()

  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'link':
        handleCopyLink(ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${post.id}`))
        break
    }
  }

  return (
    <Badge.Ribbon text={post.category.name} rootClassName={twMerge(className)}>
      {contextHolder}
      <Card hoverable className='cursor-default'>
        <Flex className='mt-2'>
          <Author author={author} avatarSize='large' />
          <Space className='ml-auto'>
            <ToggleBookmark />
            <ReportModal />
            <PostShareDropdown onMenuClick={(info) => handleMenuClick(info.key)} />
          </Space>
        </Flex>
        <Flex gap={14} className='mt-2'>
          <div className='flex-1'>
            <Typography.Title level={3}>
              <Link
                to={ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${post.id}`)}
                className='!text-ant-text-color transition-colors hover:!text-ant-primary'
              >
                {post.title}
              </Link>
            </Typography.Title>
            <Typography.Text type='secondary'>{content}</Typography.Text>
          </div>
          <div className={twMerge('hidden lg:flex', nonImage && 'lg:hidden')}>
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
