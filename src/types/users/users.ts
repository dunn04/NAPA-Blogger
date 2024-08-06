import { Timestamped } from '../common'
import { Role } from './auth'

export interface User extends Timestamped {
  id: number
  name: string
  email: string
  password: string
  avatar: string
  role: Role
}

export interface UserProfile {
  id: number
  userId: number
  bio: string
}

export type UserInfo = Omit<User, 'password'> &
  Omit<UserProfile, 'userId'> & {
    following: number
    followers: number
  }

export type Author = Pick<UserInfo, 'id' | 'name' | 'avatar'>
