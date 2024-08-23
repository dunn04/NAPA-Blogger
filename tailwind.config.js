import { theme } from 'antd'
const { getDesignToken } = theme
const globalToken = getDesignToken()
const token = theme.getDesignToken(globalToken)
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive']
      },
      colors: {
        surface: '#F5F4FE',
        'ant-primary': token.colorPrimary,
        'ant-text-color': token.colorText
      },
      screens: {
        screens: {
          xs: '480px',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1600px'
        }
      }
    }
  },
  plugins: []
}
