'use client'
import { useTheme } from 'next-themes'

export default function Home() {
  const { setTheme, theme } = useTheme()

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return <button onClick={onClick}>Change Theme</button>
}
