import { FC, useCallback, useEffect } from 'react'
import { useWrapper } from './useWrapper'
import { POST_SUMMARYS } from '@/constants'
import { ListPostCompact, PostCompactActions } from '@/components'

const DraftBlogs: FC = () => {
  const { setTitle, setDescription } = useWrapper()
  useEffect(() => {
    setTitle('Draft blogs')
    setDescription('This is where you can see all your draft blogs')
  }, [setTitle, setDescription])

  const handleDelete = useCallback(() => {}, [])

  const handleEdit = useCallback(() => {}, [])

  return (
    <ListPostCompact
      posts={POST_SUMMARYS}
      postProps={{
        extra: (post) => <PostCompactActions post={post} onDelete={handleDelete} onEdit={handleEdit} />
      }}
    />
  )
}

export { DraftBlogs }
