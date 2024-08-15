import { FC, useRef, useState } from 'react'
import { SettingItemModal, SettingItemModalProps } from './SettingItemModal'
import { Avatar } from 'antd'

type Props = SettingItemModalProps & {
  src?: string
  onChange?: (file: File) => void
}

const SettingAvatar: FC<Props> = ({ value, src, onChange, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [innerSrc, setInnerSrc] = useState(src ? src : typeof value === 'string' ? value : '')

  const handleOpenUpload = () => {
    inputRef.current?.click()
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange?.(file)
      const reader = new FileReader()
      reader.onload = () => {
        setInnerSrc(reader.result as string)
      }

      reader.readAsDataURL(file)
    }
  }

  const AvatarConent = (
    <div className='text-center'>
      <Avatar
        src={innerSrc}
        alt='avatar'
        size={240}
        data-content='Change avatar'
        className='cursor-pointer relative after:absolute after:top-0 after:left-0 after:bg-black/30 after:w-full after:h-full after:invisible  hover:after:visible transition-all after:content-[attr(data-content)] after:flex after:justify-center after:items-center'
        onClick={handleOpenUpload}
      ></Avatar>
      <input ref={inputRef} type='file' className='hidden' accept='image/*' onChange={handleUpload} />
    </div>
  )
  const innerValue = typeof value === 'string' ? <Avatar size='large' src={value} alt='Avatar' /> : value

  return (
    <SettingItemModal
      {...props}
      value={innerValue}
      content={AvatarConent}
      modalProps={{
        title: props.title,
        okText: 'Upload',
        cancelText: 'Cancel',
        ...props.modalProps
      }}
    />
  )
}

export { SettingAvatar }
