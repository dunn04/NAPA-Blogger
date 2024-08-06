import { Timestamped } from '../common'
import { Author } from '../users'
import { Category } from './categories'
import { Tags } from './tags'

export type PostStatus = 'published' | 'pending' | 'draft' | 'rejected'

export interface Post extends Timestamped {
  id: number
  title: number
  content: string
  statusId: number
  authorId: number
  publishedAt: number
}

export type PostInstance = Omit<Post, 'statusId' | 'authorId'> & {
  status: PostStatus
  author: Author
  tags: Tags[]
  likes: number
  comments: number
  bookmarked: boolean
  categories: Category[]
}

export type PostCreateParams = Pick<Post, 'title' | 'content'> & {
  tags: number[]
  categories: number[]
}

export interface PostImage {
  id: number
  url: string
  fileName: string
  fileType: string
  size: number
  postId: number
  uploadedAt: number
}
