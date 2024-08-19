import { Tags } from '@/components'
import { ContentLayout } from '@/Layouts'
import { Tag } from '@/types'
import { FC } from 'react'

const TAGS: Tag[] = [
  {
    id: 1,
    name: 'React',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Tailwind',
    color: 'green'
  },
  {
    id: 3,
    name: 'Javascript',
    color: 'yellow'
  },
  {
    id: 4,
    name: 'Typescript',
    color: 'red'
  },
  {
    id: 5,
    name: 'Nodejs',
    color: 'purple'
  }
]

const TagsPage: FC = () => {
  return (
    <ContentLayout
      title='All Tags'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut'
    >
      <Tags className='max-w-4xl mx-auto' tags={TAGS} />
    </ContentLayout>
  )
}

export { TagsPage }
