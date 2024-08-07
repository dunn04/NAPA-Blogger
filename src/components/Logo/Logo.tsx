import { ROUTE_PATHS } from '@/constants'
import { theme } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const SHAPES = {
  square: 'rounded-lg',
  circle: 'rounded-full'
}

const SIZES = {
  sm: 'w-12 h-12',
  md: 'w-24 h-24',
  lg: 'w-48 h-48'
}

const FONTS: Record<keyof typeof SIZES, string> = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl'
}

type Props = {
  shapes?: keyof typeof SHAPES
  sizes?: keyof typeof SIZES
  className?: string
}

const Logo: FC<Props> = ({ shapes = 'square', className, sizes = 'md' }) => {
  const { token } = theme.useToken()
  return (
    <Link
      to={ROUTE_PATHS.HOME}
      className={twMerge(
        'inline-flex justify-center items-center flex-shrink-0',
        SHAPES[shapes],
        SIZES[sizes],
        className
      )}
      style={{
        backgroundColor: token.colorPrimary
      }}
    >
      <p className={twMerge('font-pacifico text-white', FONTS[sizes])}>D</p>
    </Link>
  )
}

export { Logo }
