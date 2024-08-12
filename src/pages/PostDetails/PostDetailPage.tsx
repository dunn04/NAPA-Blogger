import {
  Author,
  ToggleBookmark,
  PostShareDropdown,
  ToggleButton,
  PostCommentDrawer,
  ContentPreview,
  ListPost,
  Categories,
  Tags
} from '@/components'
import { POSTS } from '@/constants'
import { useToggle } from '@/hooks'
import { CommentInstance, PostInstance } from '@/types'
import { makeBeautyDate } from '@/utils'
import { CommentOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Badge, Button, Divider, Flex, Space, Typography } from 'antd'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

// Fake data

const getPostWithId = (id: string): PostInstance => ({
  id: Number(id),
  title: 'Lorem ipsum dolor sit amet',
  content: `> 
> 
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


`,
  shortContent:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo incidunt atque ex magni consequuntur non quisquam sit, fugiat tenetur error voluptates sed ad perferendis natus reprehenderit veniam est minus neque.',
  status: 'published',
  author: {
    avatar: 'https://i.pravatar.cc/150?img=1',
    id: 1,
    name: 'John Doe'
  },
  bookmarked: false,
  category: {
    id: 1,
    name: 'Technology'
  },
  comments: 10,
  createdAt: Date.now(),
  likes: 100,
  publishedAt: Date.now(),
  tags: [
    {
      color: '#f50',
      id: 1,
      name: 'ReactJS'
    },
    {
      color: '#2db7f5',
      id: 2,
      name: 'NodeJS'
    },
    {
      color: '#87d068',
      id: 3,
      name: 'TypeScript'
    }
  ],
  updatedAt: Date.now()
})

// Fake comments
const COMMENT: CommentInstance = {
  id: 1,
  author: {
    avatar: 'https://i.pravatar.cc/150?img=2',
    id: 2,
    name: 'Jane Doe'
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo incidunt atque ex magni consequuntur non quisquam sit, fugiat tenetur error voluptates sed ad perferendis natus reprehenderit veniam est minus neque.',
  createdAt: Date.now(),
  postId: 1,
  status: 'published',
  updatedAt: Date.now(),
  replies: [] as CommentInstance[]
}
const COMMENTS: CommentInstance[] = Array.from({ length: 10 }, (_, i) => {
  const comment = { ...COMMENT }
  const repliesLength = Math.floor(Math.random() * 15)

  if (repliesLength > 0) {
    comment.replies = Array.from({ length: repliesLength }, (_, i) => {
      const reply: CommentInstance = {
        ...COMMENT,
        id: i + 2
      }
      return reply
    })
  }
  comment.id = i + 1
  return comment
})

const PostDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = getPostWithId(id || '1')
  const [openComment, toggleComment] = useToggle(false)

  return (
    <div className='max-w-4xl mx-auto'>
      <Typography.Title level={2}>{post.title}</Typography.Title>
      <Categories categories={[post.category]} className='mb-6' title='' />
      <Flex justify='center' className='mt-2'>
        <Author author={post.author} avatarSize='large' />
        <Space className='ml-auto'>
          <ToggleBookmark />
          <PostShareDropdown />
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
      <Divider />
      <Typography.Title level={4} className='mt-4'>
        Other Posts
      </Typography.Title>
      <ListPost posts={POSTS.slice(0, 4)} oneColumn />
      <PostCommentDrawer comments={COMMENTS} open={openComment} onClose={toggleComment} />
    </div>
  )
}

export { PostDetailPage }
