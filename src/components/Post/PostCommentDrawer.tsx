import { CommentInstance } from '@/types'
import { Drawer, DrawerProps, Empty } from 'antd'
import { FC } from 'react'
import { ListComment } from '../Comments'

type Props = {
  className?: string
  comments: CommentInstance[]
} & Omit<DrawerProps, 'title' | 'children'>

const PostCommentDrawer: FC<Props> = ({ comments, size = 'large', ...props }) => {
  return (
    <Drawer size={size} title={`Comments (${comments.length}) `} {...props}>
      {comments.length === 0 ? <Empty description='No comments' /> : <ListComment comments={comments} />}
    </Drawer>
  )
}

export { PostCommentDrawer }
