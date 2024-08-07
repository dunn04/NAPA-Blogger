import { User } from './users'

export type Role = 'admin' | 'author' | 'reader'

export type UserLoginParams = Pick<User, 'email' | 'password'>

export type UserRegisterParams = Pick<User, 'name' | 'email' | 'password'> & {
  avatar: string
}
export type UserAuthResponse = Omit<User, 'password'>
