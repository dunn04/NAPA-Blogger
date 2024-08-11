import { CommentContext } from '@/providers'
import { useContext } from 'react'

const useCommentProps = () => {
  const context = useContext(CommentContext)

  if (!context) {
    throw new Error('useCommentProps must be used within a CommentProvider')
  }

  return context
}

export { useCommentProps }
