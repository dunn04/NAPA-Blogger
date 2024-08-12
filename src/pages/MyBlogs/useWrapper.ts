/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useMemo } from 'react'
import { MyBlogContext } from './MyBlogsWrapper'

const useWrapper = () => {
  const context = useContext(MyBlogContext)
  if (!context) {
    throw new Error('useWrapper must be used within a MyBlogProvider')
  }

  const setTitle = useCallback(
    (title: string) => {
      context.setLayoutState((prev) => ({ ...prev, title }))
    },
    [context.setLayoutState]
  )

  const setDescription = useCallback(
    (description: string) => {
      context.setLayoutState((prev) => ({ ...prev, description }))
    },
    [context.setLayoutState]
  )

  return useMemo(
    () => ({
      setTitle,
      setDescription
    }),
    [setTitle, setDescription]
  )
}

export { useWrapper }
