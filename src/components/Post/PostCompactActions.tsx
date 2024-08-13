import { PostSummary } from '@/types'
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons'
import { MenuProps, Dropdown, Button } from 'antd'
import { FC, useMemo } from 'react'

type ExtraProps = {
  post: PostSummary
  onDelete?: (post: PostSummary) => void
  onEdit?: (post: PostSummary) => void
}

const PostCompactActions: FC<ExtraProps> = ({ post, onDelete, onEdit }) => {
  const items: MenuProps['items'] = useMemo(() => {
    const value: MenuProps['items'] = []
    onEdit && value.push({ key: 'edit', icon: <EditOutlined />, label: 'Edit' })
    onDelete && value.push({ key: 'delete', icon: <DeleteOutlined />, label: 'Delete', danger: true })

    return value
  }, [onEdit, onDelete])

  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'edit':
        onEdit?.(post)
        break
      case 'delete':
        onDelete?.(post)
        break
    }
  }

  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items,
        onClick: ({ key }) => handleMenuClick(key)
      }}
    >
      <Button type='text'>
        <EllipsisOutlined />
      </Button>
    </Dropdown>
  )
}

export { PostCompactActions }
