import { Timestamped } from '../common'

export interface RessFeeds extends Timestamped {
  id: number
  url: string
  title: string
  description: string
}
