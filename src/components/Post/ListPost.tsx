import { PostSimplify } from '@/types'
import { Col, Row } from 'antd'
import { FC } from 'react'
import { SimplifyPost } from './SimplifyPost'

type Props = {
  className?: string
  posts: PostSimplify[]
  oneColumn?: boolean
}

const ListPost: FC<Props> = ({ posts, className, oneColumn = false }) => {
  return (
    <Row gutter={[16, 16]} className={className}>
      {posts.map((post) => (
        <Col key={post.id} xl={oneColumn ? 24 : 12}>
          <SimplifyPost post={post} />
        </Col>
      ))}
    </Row>
  )
}

export { ListPost }
