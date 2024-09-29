'use client'

import { useTheme } from 'next-themes'
import Header from '@/components/Header'

export default function Home() {
  const { setTheme, theme } = useTheme()

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <>
      {/* <Button
        variant={'default'}
        onClick={onClick}
        className='absolute top-0 left-0'
      >
        Toggle Theme
      </Button> */}

      <Header />

      <main className='flex-1 w-full'></main>
    </>
  )
}
