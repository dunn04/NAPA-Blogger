import { PostSimplify } from '@/types'
import { List } from 'antd'
import { FC } from 'react'
import { SimplifyPost } from './SimplifyPost'
import { twMerge } from 'tailwind-merge'
import { ListGridType } from 'antd/es/list'

type Props = {
  className?: string
  posts: PostSimplify[]
  oneColumn?: boolean
  postNonImage?: boolean
  grid?: ListGridType
}

const ListPost: FC<Props> = ({ posts, className, oneColumn = false, postNonImage = false, grid }) => {
  return (
    <List
      className={twMerge('w-full', className)}
      grid={{
        gutter: 16,
        xs: 1,
        xl: oneColumn ? 1 : 2,
        ...grid
      }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <SimplifyPost post={post} nonImage={postNonImage} />
        </List.Item>
      )}
      rowKey='id'
    />
  )
}

export { ListPost }
