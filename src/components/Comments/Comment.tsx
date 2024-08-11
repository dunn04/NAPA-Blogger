import { CommentInstance } from '@/types'
import { FC } from 'react'
import { Author } from '../Avatar'
import { Badge, Button, Dropdown, Flex } from 'antd'
import { makeBeautyDate } from '@/utils'
import { EllipsisOutlined } from '@ant-design/icons'
import { POST_SHARE_ITEM } from '@/constants'
import { ToggleEditor } from './ToggleEditor'
import { ContentPreview } from '../Editor'
import { CommentProvider } from '@/providers'

type Props = {
  className?: string
  comment: CommentInstance
  withAction?: boolean
}
// TODO: Implement reply functionality
const Comment: FC<Props> = ({ className, comment, withAction = true }) => {
  return (
    <div className={className}>
      <Flex gap={14} align='center'>
        <Author author={comment.author} />
        <Badge status='success' text={makeBeautyDate(comment.updatedAt)} />
        <Dropdown trigger={['click']} className='ml-auto' menu={{ items: POST_SHARE_ITEM }}>
          <Button type='text' icon={<EllipsisOutlined />} />
        </Dropdown>
      </Flex>
      <ContentPreview source={comment.content} />
      {withAction && (
        <CommentProvider
          props={{
            author: comment.author
          }}
        >
          <ToggleEditor className='my-2' />
        </CommentProvider>
      )}
      {comment.replies.length > 0 && (
        <div className='ml-6 border-l border-gray-200 px-4'>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} withAction={false} />
          ))}
        </div>
      )}
    </div>
  )
}

export { Comment }
