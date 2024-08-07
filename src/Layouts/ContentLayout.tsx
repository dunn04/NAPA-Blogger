import { Col, Row, Typography } from 'antd'
import { FC, PropsWithChildren, ReactNode } from 'react'

type Props = {
  className?: string
  title?: string
  description?: string
  rightPanel?: ReactNode
} & PropsWithChildren

const ContentLayout: FC<Props> = ({ children, className, title, description, rightPanel }) => {
  return (
    <div className={className}>
      <div className='mb-10'>
        <Typography.Title level={4}>{title}</Typography.Title>
        <Typography.Text>{description}</Typography.Text>
      </div>
      <Row gutter={[16, 16]}>
        <Col md={24} xl={18}>
          {children}
        </Col>
        <Col md={24} xl={6}>
          {rightPanel}
        </Col>
      </Row>
    </div>
  )
}

export { ContentLayout }
