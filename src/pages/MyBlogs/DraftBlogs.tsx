import { FC, useCallback, useEffect } from 'react'
import { useWrapper } from './useWrapper'
import { POST_SUMMARYS, ROUTE_ACTIONS } from '@/constants'
import { ListPostCompact, PostCompactActions } from '@/components'
import { useNavigate } from 'react-router-dom'
import { PostSummary } from '@/types'

const DraftBlogs: FC = () => {
  const { setTitle, setDescription } = useWrapper()
  const navigate = useNavigate()
  useEffect(() => {
    setTitle('Draft blogs')
    setDescription('This is where you can see all your draft blogs')
  }, [setTitle, setDescription])

  const handleDelete = useCallback(() => {}, [])

  const handleEdit = useCallback(
    (post: PostSummary) => {
      navigate(ROUTE_ACTIONS.BLOG_EDIT_WITH_ID(`${post.id}`))
    },
    [navigate]
  )

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
