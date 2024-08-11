import { MessageOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { FC, useState } from 'react'
import { CommentEditor } from './CommentEditor'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  open?: boolean
  defaultOpen?: boolean
  onChange?: (open: boolean) => void
  onClick?: () => void
}

const ToggleEditor: FC<Props> = ({ className, defaultOpen = false, onChange, onClick }) => {
  const [currentOpen, setOpen] = useState(defaultOpen || false)

  const handleOpen = () => {
    const newOpen = !currentOpen
    setOpen(newOpen)
    onChange?.(newOpen)
    onClick?.()
  }

  return (
    <div className={className}>
      <Button type='text' icon={<MessageOutlined />} className='mb-4' onClick={handleOpen}>
        Reply
      </Button>
      <CommentEditor className={twMerge('hidden', currentOpen && 'block')} />
    </div>
  )
}

export { ToggleEditor }
