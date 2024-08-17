import { FileImageOutlined, FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Input, InputRef, Row, Space, theme } from 'antd'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ContentPreview } from './ContentPreview'
import { TextAreaProps } from 'antd/es/input'
import { useToggle } from '@/hooks'

type Props = {
  onUpload?: (file: File) => void
} & TextAreaProps

const Editor: FC<Props> = ({ className, onUpload, value, onChange, ...textAreaProps }) => {
  const [content, setContent] = useState<string>('')
  const [fullScreen, toggleFullScreen] = useToggle()
  const inputRef = useRef<InputRef>(null)

  const { token } = theme.useToken()

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

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    onChange?.(e)
  }

  const handleFullScreen = () => {
    toggleFullScreen()
    document.body.style.overflow = fullScreen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    if (value) setContent(`${value}`)
  }, [value])

  return (
    <div
      className={twMerge(
        fullScreen && 'fixed left-0 top-0 w-full h-full z-[999] px-4 overflow-y-scroll lg:py-4',
        className
      )}
      style={{
        backgroundColor: token.colorBgContainer
      }}
    >
      <Row gutter={[16, 16]}>
        <Col
          sm={24}
          xs={24}
          lg={fullScreen ? 12 : 24}
          className={twMerge(fullScreen && 'sticky top-0 lg:h-screen z-10')}
        >
          <div
            style={{
              backgroundColor: token.colorBgContainer
            }}
          >
            <Input.TextArea
              value={content}
              onChange={handleChange}
              autoSize={{
                minRows: 4,
                maxRows: 12
              }}
              {...textAreaProps}
            />
            <Flex justify='space-between' align='center' className='mt-2 w-full'>
              <Space>
                <Button icon={<FileImageOutlined />} type='text' onClick={handleOpenFile} />
              </Space>
              <Button
                icon={fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                type='text'
                onClick={handleFullScreen}
              />
            </Flex>
          </div>
        </Col>
        {fullScreen && (
          <Col sm={24} xs={24} lg={12}>
            <ContentPreview source={content} className='overscroll-y-auto' />
          </Col>
        )}
      </Row>
      <Input type='file' accept='image/*' className='!hidden' ref={inputRef} onChange={handleFileChange} />
    </div>
  )
}

export { Editor }
