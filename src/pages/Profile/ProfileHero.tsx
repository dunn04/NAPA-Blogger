import { Author } from '@/types'
import { Avatar, Typography } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  author: Author
}

const ProfileHero: FC<Props> = ({ className, author }) => {
  return (
    <div className={twMerge('xl:h-72 h-36 bg-gray-700 rounded-md relative mb-20', className)}>
      <img
        src='https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='wallpaper'
        className='w-full h-full object-cover rounded-md'
      />
      <div className='absolute bottom-0 flex flex-col items-center translate-y-1/2 -translate-x-1/2 left-1/2 xl:left-8 xl:translate-x-0 xl:flex-row'>
        <Avatar src={author.avatar} className='w-24 h-24 xl:w-32 xl:h-32' />
        <Typography.Title level={3} className='text-center xl:self-end'>
          {author.name}
        </Typography.Title>
      </div>
    </div>
  )
}

export { ProfileHero }
