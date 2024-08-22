import { Categories, Tags } from '@/components'
import { ContentLayout } from '@/Layouts'
import { Category, Tag } from '@/types'
import { Col, Row } from 'antd'
import { FC } from 'react'

const TAGS: Tag[] = [
  {
    id: 1,
    name: 'React',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Tailwind',
    color: 'green'
  },
  {
    id: 3,
    name: 'Javascript',
    color: 'yellow'
  },
  {
    id: 4,
    name: 'Typescript',
    color: 'red'
  },
  {
    id: 5,
    name: 'Nodejs',
    color: 'purple'
  }
]

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Technology'
  },
  {
    id: 2,
    name: 'Design'
  },
  {
    id: 3,
    name: 'Programming'
  },
  {
    id: 4,
    name: 'Life'
  }
]
const TagsPage: FC = () => {
  return (
    <ContentLayout
      title='All Tags'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut'
      className='max-w-4xl mx-auto'
    >
      <Row gutter={[16, 16]}>
        <Col xl={12}>
          <Tags tags={TAGS} />
        </Col>
        <Col xl={12}>
          <Categories categories={CATEGORIES} />
        </Col>
      </Row>
    </ContentLayout>
  )
}

export { TagsPage }
