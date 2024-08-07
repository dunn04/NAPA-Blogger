import { Categories } from '@/components'
import { Category } from '@/types'
import { Col, Row, Typography } from 'antd'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  title?: string
  description?: string
  rightPanel?: ReactNode
} & PropsWithChildren

const Instance: FC<Props> = ({ children, className, title, description, rightPanel }) => {
  return (
    <div className={twMerge('', className)}>
      <div className='mb-10'>
        <Typography.Title level={4}>{title}</Typography.Title>
        <Typography.Text>{description}</Typography.Text>
      </div>
      <Row>
        <Col md={24} xl={rightPanel ? 18 : 24}>
          <div className='lg:pr-4'>{children}</div>
        </Col>
        {rightPanel && (
          <Col md={24} xl={6}>
            <div className='lg:pl-4 mt-4 lg:mt-0'>{rightPanel}</div>
          </Col>
        )}
      </Row>
    </div>
  )
}

type WithCategoriesProps = Omit<Props, 'rightPanel'> & {
  ignoreCategories?: string[]
}
// Temp data
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
const WithCategories: FC<WithCategoriesProps> = ({ children, ignoreCategories, ...props }) => {
  const categories = CATEGORIES.filter((category) => !ignoreCategories?.includes(category.id + ''))

  const RightPanel = <Categories categories={categories} />

  return (
    <Instance {...props} rightPanel={RightPanel}>
      {children}
    </Instance>
  )
}

const ContentLayout = Object.assign(Instance, {
  WithCategories
})

export { ContentLayout }
