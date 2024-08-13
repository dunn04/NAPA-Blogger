import { PostSimplify } from '@/types'
import { List } from 'antd'
import { FC } from 'react'
import { SimplifyPost } from './SimplifyPost'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  posts: PostSimplify[]
  oneColumn?: boolean
  postNonImage?: boolean
}

const ListPost: FC<Props> = ({ posts, className, oneColumn = false, postNonImage = false }) => {
  return (
    <List
      className={twMerge('w-full', className)}
      grid={{
        gutter: 16,
        xs: 1,
        xl: oneColumn ? 1 : 2
      }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item key={post.id}>
          <SimplifyPost post={post} nonImage={postNonImage} />
        </List.Item>
      )}
      rowKey='id'
    />
  )
}

export { ListPost }
