import { Popover, Input } from 'antd'
import { SearchProps } from 'antd/es/input'
import { FC, useMemo, useRef, useState } from 'react'
import { SearchResult } from './SearchResult'
import { POSTS } from '@/constants'
import { PostSearchItem } from '@/types'
import { useClickOutside } from '@/hooks'

type Props = SearchProps

const Search: FC<Props> = ({ ...props }) => {
  const [open, setOpen] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  useClickOutside(resultRef, () => {
    setOpen(false)
  })

  const result = useMemo(() => {
    return POSTS.map((post) => {
      return {
        title: post.title,
        author: post.author,
        background: post.background,
        id: post.id,
        publishedAt: post.publishedAt,
        shortContent: post.shortContent
      } as PostSearchItem
    })
  }, [])

  const openResult = () => {
    setOpen(true)
  }

  const closeResult = () => {
    setOpen(false)
  }

  return (
    <Popover
      overlayClassName='w-full max-w-md'
      content={<SearchResult result={result} onMenuClick={closeResult} ref={resultRef} />}
      trigger={['click']}
      open={open}
    >
      <Input.Search className='max-w-md' placeholder='Search blog...' {...props} onFocus={openResult} />
    </Popover>
  )
}

export { Search }
