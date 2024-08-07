import { CommentInstance } from '@/types'
import { List } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Comment } from './Comment'

type Props = {
  className?: string
  comments: CommentInstance[]
}

const ListComment: FC<Props> = ({ className, comments }) => {
  return (
    <div className={twMerge('', className)}>
      <List
        dataSource={comments}
        itemLayout='horizontal'
        renderItem={(comment) => {
          return (
            <List.Item>
              <Comment comment={comment} />
            </List.Item>
          )
        }}
      />
    </div>
  )
}

export { ListComment }
