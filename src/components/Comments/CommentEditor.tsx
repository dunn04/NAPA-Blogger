import { Button, Flex } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Editor } from '../Editor'
import { Author } from '../Avatar'
import { useCommentProps } from '@/hooks'

type Props = {
  className?: string
}

const CommentEditor: FC<Props> = ({ className }) => {
  const { author } = useCommentProps()
  return (
    <div className={twMerge('', className)}>
      <Flex gap={4}>
        <Author author={author} onlyAvatar avatarSize='large' />
        <Editor className='w-full' />
      </Flex>
      <div className='flex mt-2 justify-end'>
        <Button type='primary' className=''>
          Comment
        </Button>
      </div>
    </div>
  )
}

export { CommentEditor }
