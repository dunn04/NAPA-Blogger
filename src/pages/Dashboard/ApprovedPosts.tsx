import { SelectAllList, PostApproved } from '@/components'
import { POSTS } from '@/constants'
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Col, Space, Button, Row } from 'antd'
import { FC } from 'react'

type Props = {
  className?: string
}

const ApprovedPosts: FC<Props> = ({ className }) => {
  const Wrapper = (children: JSX.Element | JSX.Element[]) => (
    <Row className='mt-2' gutter={[16, 16]}>
      {children}
    </Row>
  )
  return (
    <SelectAllList
      className={className}
      dataSource={POSTS}
      renderItem={(post) => (
        <Col key={post.id} xs={24} sm={24} md={12} xl={8}>
          <PostApproved post={post} extra={<SelectAllList.Checkbox item={post} />} />
        </Col>
      )}
      wrapper={Wrapper}
      extra={
        <Space>
          <Button type='text'>
            <CheckCircleOutlined />
          </Button>
          <Button type='text'>
            <DeleteOutlined />
          </Button>
        </Space>
      }
    />
  )
}

export { ApprovedPosts }
