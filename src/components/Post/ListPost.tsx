import { PostSimplify } from '@/types'
import { Col, Row } from 'antd'
import { FC } from 'react'
import { SimplifyPost } from './SimplifyPost'

type Props = {
  className?: string
  posts: PostSimplify[]
}

const ListPost: FC<Props> = ({ posts, className }) => {
  return (
    <Row gutter={[16, 16]} className={className}>
      {posts.map((post) => (
        <Col key={post.id} xl={12}>
          <SimplifyPost post={post} />
        </Col>
      ))}
    </Row>
  )
}

export { ListPost }
