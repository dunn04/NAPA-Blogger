import { ROUTE_PATHS } from '@/constants'
import { theme } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
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
  onClick?: () => void
}

const Logo: FC<Props> = ({ shapes = 'square', className, sizes = 'md', onClick }) => {
  const navigate = useNavigate()
  const { token } = theme.useToken()

  const handeMenuClick = () => {
    navigate(ROUTE_PATHS.HOME)
    onClick?.()
  }

  return (
    <div
      onClick={handeMenuClick}
      className={twMerge(
        'inline-flex justify-center items-center flex-shrink-0 cursor-pointer',
        SHAPES[shapes],
        SIZES[sizes],
        className
      )}
      style={{
        backgroundColor: token.colorPrimary
      }}
    >
      <p className={twMerge('font-pacifico text-white', FONTS[sizes])}>D</p>
    </div>
  )
}

export { Logo }
