import { CommentInstance } from '@/types'
import { Drawer, DrawerProps, Empty } from 'antd'
import { FC } from 'react'
import { CommentEditor, ListComment } from '../Comments'
import { CommentProvider } from '@/providers'

type Props = {
  className?: string
  comments: CommentInstance[]
} & Omit<DrawerProps, 'title' | 'children'>

const PostCommentDrawer: FC<Props> = ({ comments, size = 'large', ...props }) => {
  return (
    <Drawer size={size} title={`Comments (${comments.length}) `} footer={<Footer />} {...props}>
      {comments.length === 0 ? <Empty description='No comments' /> : <ListComment comments={comments} />}
    </Drawer>
  )
}

const Footer = () => {
  return (
    <CommentProvider
      props={{
        author: {
          avatar: 'https://i.pravatar.cc/150?img=3',
          id: 1,
          name: 'John Doe'
        }
      }}
    >
      <CommentEditor />
    </CommentProvider>
  )
}

export { PostCommentDrawer }
