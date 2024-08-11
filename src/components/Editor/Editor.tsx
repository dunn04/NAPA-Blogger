import { FileImageOutlined } from '@ant-design/icons'
import { Button, Input, InputRef, Space } from 'antd'
import { ChangeEvent, FC, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  onUpload?: (file: File) => void
}

const Editor: FC<Props> = ({ className, onUpload }) => {
  const inputRef = useRef<InputRef>(null)

  const handleOpenFile = () => {
    inputRef.current?.input?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const isUpload = onUpload && file
    if (isUpload) {
      onUpload(file)
    }
  }

  return (
    <div className={twMerge('', className)}>
      <Space>
        <Button icon={<FileImageOutlined />} type='text' onClick={handleOpenFile} />
      </Space>
      <Input.TextArea />
      <Input type='file' accept='image/*' className='hidden' ref={inputRef} onChange={handleFileChange} />
    </div>
  )
}

export { Editor }
