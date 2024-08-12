import { UserInfo } from '@/types'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ProfileHero } from './ProfileHero'
import { Col, Row, Typography } from 'antd'
import { ProfileBio } from './ProfileBio'
import { ListPost, ToggleFollow } from '@/components'
import { POSTS } from '@/constants'

// Fake data

const getUserInfoById = (id: string): UserInfo => {
  return {
    id: +id,
    name: 'John Doe',
    email: 'corepper03@gmail.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'I am a software engineer',
    createdAt: Date.now(),
    followers: 100,
    following: 200,
    role: 'author',
    updatedAt: Date.now()
  }
}

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const user = getUserInfoById(id!)
  return (
    <div className='mx-auto'>
      <ProfileHero author={user} />
      <div className='xl:flex xl:justify-end '>
        <ToggleFollow className='mb-4 w-full xl:w-auto xl:min-w-52' type='default' />
      </div>
      <Row gutter={[14, 14]}>
        <Col span={24} xl={8}>
          <ProfileBio user={user} />
        </Col>
        <Col span={24} xl={16}>
          <div className=''>
            <Typography.Title level={5}>Your blogs</Typography.Title>
            <ListPost posts={POSTS} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export { ProfilePage }
