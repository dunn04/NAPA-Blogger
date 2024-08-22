import { useToggle } from '@/hooks'
import { FlagOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Space, Typography } from 'antd'
import { cloneElement, FC, Fragment, ReactElement, ReactNode, useState } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  onSubmit?: (reason: string) => void
}

const ReportModal: FC<Props> = ({ children, className, onSubmit }) => {
  const [open, toggle] = useToggle()
  const [reason, setReason] = useState('')
  const cloneChildren = cloneElement(
    (children ? children : <Button type='text' icon={<FlagOutlined />} />) as ReactElement,
    {
      onClick: () => {
        toggle()
      },
      className
    }
  )

  const handleResonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value)
  }

  return (
    <Fragment>
      {cloneChildren}
      <Modal title='Report' open={open} onCancel={toggle} okText='Report' onOk={() => onSubmit?.(reason)}>
        <Space direction='vertical' className='w-full'>
          <Typography.Text>Please provide a reason why you are reporting.</Typography.Text>
          <Input.TextArea placeholder='Enter your reason...' value={reason} onChange={handleResonChange} />
        </Space>
      </Modal>
    </Fragment>
  )
}

export { ReportModal }
