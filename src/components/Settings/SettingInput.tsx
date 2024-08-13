import { FC } from 'react'
import { SettingItemModal, SettingItemModalProps } from './SettingItemModal'
import { Input, Typography } from 'antd'

type Props = SettingItemModalProps & {
  description?: string
  placeholder?: string
  onInputChange?: (value: string) => void
  inputValue?: string
}

const SettingInput: FC<Props> = ({ description, onInputChange, inputValue, ...props }) => {
  const innerValue = inputValue ? inputValue : typeof props.value === 'string' ? props.value : ''
  const Content = (
    <div>
      <Typography.Text type='secondary'>{description}</Typography.Text>
      <Input value={innerValue} onChange={(e) => onInputChange?.(e.target.value)} className='mt-4' />
    </div>
  )
  return (
    <SettingItemModal
      {...props}
      modalProps={{
        title: props.title,
        okText: 'Save',
        cancelText: 'Cancel',
        ...props.modalProps
      }}
      content={Content}
    />
  )
}

export { SettingInput }
