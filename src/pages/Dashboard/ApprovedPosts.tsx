import { SelectAllList, PostApproved } from '@/components'
import { POSTS } from '@/constants'
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Col, Space, Button, Row, Popconfirm } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

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
      actionSticky
      className={className}
      dataSource={POSTS}
      renderItem={(post, isChecked) => (
        <Col key={post.id} xs={24} sm={24} md={12} xl={8}>
          <PostApproved
            className={twMerge(isChecked && 'border-ant-primary')}
            post={post}
            extra={<SelectAllList.Checkbox item={post} />}
          />
        </Col>
      )}
      wrapper={Wrapper}
      extra={
        <Space>
          <Button type='text'>
            <CheckCircleOutlined />
          </Button>
          <Popconfirm title='Are you want sure to delete all?'>
            <Button type='text'>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      }
    />
  )
}

export { ApprovedPosts }
