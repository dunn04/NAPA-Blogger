import { Author as IAuthor } from '@/types'
import { Avatar, Dropdown, DropDownProps } from 'antd'
import { FC } from 'react'

type Props = Omit<DropDownProps, 'children'> & {
  user: IAuthor
}

const AvatarDropdown: FC<Props> = ({ user, trigger = ['click'], ...props }) => {
  return (
    <Dropdown {...props} trigger={trigger}>
      <Avatar src={user.avatar} alt={user.name} className='cursor-pointer' />
    </Dropdown>
  )
}

export { AvatarDropdown }
