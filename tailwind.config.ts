import type { Config } from 'tailwindcss'
const headerSize = 100;

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '8xl': '5.5rem'
      },
      height: {
        'head': `${headerSize}px`,
        'head-mobile': `${headerSize-20}px`
      },
      maxHeight: {
        'head': `${headerSize}px`,
        'head-mobile': `${headerSize-20}px`
      },
      padding: {
        'head': `${headerSize}px`,
        'head-mobile': `${headerSize-20}px`
      },
      lineHeight: {
        'menu': '5rem'
      }
    },
  },
  plugins: [],
}
export default config
