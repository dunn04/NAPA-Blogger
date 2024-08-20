import { CouterItem } from '@/components'
import { ICouterItem } from '@/types'
import { Card, Col, Flex, Row, Space, Typography } from 'antd'
import { FC } from 'react'
import { ApprovedPosts } from './ApprovedPosts'
import { UserList } from './UserList'
import { Link } from 'react-router-dom'

const couterItems: ICouterItem[] = [
  {
    title: 'Total Users',
    count: 100
  },
  {
    title: 'Total Categories',
    count: 100
  },
  {
    title: 'Total Posts',
    count: 20
  },
  {
    title: 'Total Posts',
    count: 20
  }
]

const DashboardPage: FC = () => {
  return (
    <Space direction='vertical' size='large' className='w-full'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Row gutter={[16, 16]}>
        {couterItems.map((item, index) => (
          <Col key={index} xs={24} sm={12} lg={8} md={8} xl={6}>
            <CouterItem data={item} />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} xl={16}>
          <Space direction='vertical'>
            <Flex justify='space-between' align='center'>
              <Typography.Title level={5} className='!mb-0'>
                Approved Posts
              </Typography.Title>
              <Link to='#'>View all</Link>
            </Flex>
            <ApprovedPosts />
          </Space>
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <Card title='New Users' extra={<Link to='#'>View all</Link>}>
            <UserList
              users={Array.from({ length: 5 }).map((_, index) => ({
                id: index,
                name: 'User Name',
                avatar: 'https://via.placeholder.com/150',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.'
              }))}
            />
          </Card>
        </Col>
      </Row>
    </Space>
  )
}

export { DashboardPage }
