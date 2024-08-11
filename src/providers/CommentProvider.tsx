import { Author } from '@/types'
import { createContext, FC, PropsWithChildren } from 'react'

// Comment Props
export type TCommentContext = {
  author: Author
}

export const CommentContext = createContext<TCommentContext | undefined>(undefined)

type Props = {
  props: TCommentContext
}

const CommentProvider: FC<PropsWithChildren<Props>> = ({ children, props }) => {
  return <CommentContext.Provider value={props}>{children}</CommentContext.Provider>
}

export { CommentProvider }
