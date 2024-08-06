import { Timestamped } from '../common'
import { Author } from '../users'

type CommentStatus = 'published' | 'rejected'

export interface Comment extends Timestamped {
  id: number
  content: string
  authorId: number
  postId: number
  status: CommentStatus
}

export interface CommentImage {
  id: number
  url: string
  fileName: string
  fileType: string
  size: number
  commentId: number
  uploadedAt: number
}

export type CommentInstance = Omit<Comment, 'authorId'> & {
  author: Author
}
