import { Author, ToggleBookmark, PostShareDropdown, ToggleButton, PostCommentDrawer } from '@/components'
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
  content: `<p>
    <span style="font-size: 18px;">Quill Rich Text Editor</span>
</p>
<p>
    <br>
</p>
<p class="ant-typography">Quill is a free,
    <a href="https://github.com/quilljs/quill/" target="_blank">open source</a>WYSIWYG editor built for the modern web. With its
    <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and a
    <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</p>
<p>
    <br>
</p>
<ul>
    <li>Fast and lightweight</li>
    <li>Semantic markup</li>
    <li>Standardized HTML between browsers</li>
    <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Downloads</span>
</p>
<p>
    <br>
</p>
<ul>
    <li>
        <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
    <li>
        <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
</ul>`,
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
      <Flex justify='center' className='mt-2'>
        <Author author={post.author} avatarSize='large' />
        <Space className='ml-auto'>
          <ToggleBookmark />
          <PostShareDropdown />
        </Space>
      </Flex>
      <Badge status='success' text={`Published at ${makeBeautyDate(post.publishedAt)}`} className='my-4' />
      <div className='mt-4' dangerouslySetInnerHTML={{ __html: post.content }} />
      <Divider />
      <Space>
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
      <PostCommentDrawer comments={COMMENTS} open={openComment} onClose={toggleComment} />
    </div>
  )
}

export { PostDetailPage }
