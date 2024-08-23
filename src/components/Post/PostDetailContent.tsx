import { COMMENTS, ROUTE_ACTIONS } from '@/constants'
import { PostInstance } from '@/types'
import { makeBeautyDate } from '@/utils'
import { HeartFilled, HeartOutlined, CommentOutlined } from '@ant-design/icons'
import { Typography, Flex, Space, Badge, Button } from 'antd'
import { FC } from 'react'
import { Author } from '../Avatar'
import { ToggleBookmark, ToggleButton } from '../Button'
import { Categories } from '../Categories'
import { ContentPreview } from '../Editor'
import { ReportModal } from '../Report'
import { Tags } from '../Tags'
import { PostCommentDrawer } from './PostCommentDrawer'
import { PostShareDropdown } from './PostShareDropdown'
import { useCopyLink, useToggle } from '@/hooks'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  post: PostInstance
}

const PostDetailContent: FC<Props> = ({ className, post }) => {
  const [openComment, toggleComment] = useToggle(false)
  const { contextHolder, handleCopyLink } = useCopyLink()
  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'link':
        handleCopyLink(ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${post.id}`))
        break
    }
  }
  return (
    <div className={twMerge('', className)}>
      {contextHolder}
      <Typography.Title level={2}>{post.title}</Typography.Title>
      <Categories categories={[post.category]} className='mb-6' title='' />
      <Flex justify='center' className='mt-2'>
        <Author author={post.author} avatarSize='large' />
        <Space className='ml-auto'>
          <ToggleBookmark />
          <ReportModal />
          <PostShareDropdown onMenuClick={(info) => handleMenuClick(info.key)} />
        </Space>
      </Flex>
      <Badge status='success' text={`Published at ${makeBeautyDate(post.publishedAt)}`} className='my-4' />
      <ContentPreview source={post.content} />
      <Space className='mt-4' wrap>
        <ToggleButton
          type='text'
          checkedIcon={<HeartFilled className='text-red-500' />}
          unCheckedIcon={<HeartOutlined />}
        >
          {post.likes} Likes
        </ToggleButton>
        <Button type='text' icon={<CommentOutlined />} onClick={toggleComment}>
          {post.comments} Comments
        </Button>
      </Space>
      <Tags tags={post.tags} titleClassName='font-bold' className='w-full' />
      <PostCommentDrawer comments={COMMENTS} open={openComment} onClose={toggleComment} />
    </div>
  )
}

export { PostDetailContent }
