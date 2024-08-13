import { Modal, ModalProps } from 'antd'
import { SettingItem, SettingItemProps } from './SettingItem'
import { FC, Fragment, ReactNode } from 'react'
import { useToggle } from '@/hooks'

export type SettingItemModalProps = SettingItemProps & {
  modalProps?: Omit<ModalProps, 'children'>
  content?: ReactNode
}

const SettingItemModal: FC<SettingItemModalProps> = ({ modalProps, content, ...settingProps }) => {
  const [openModal, toggleModal] = useToggle()
  const handleOpenModal = () => {
    toggleModal()
    settingProps.onClick?.()
  }

  return (
    <Fragment>
      <SettingItem {...settingProps} onClick={handleOpenModal} />
      <Modal closeIcon={null} open={openModal} onCancel={toggleModal} {...modalProps} children={content} />
    </Fragment>
  )
}

export { SettingItemModal }
