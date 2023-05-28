'use client'

import { useEffect, useState } from 'react'

type ThemeType = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>('dark')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const currentTheme = localTheme === 'light' || localTheme === 'dark' ? localTheme : systemTheme

    setTheme(currentTheme)
  }, [])

  useEffect(() => {
    const themeColor = document.querySelector("[name='theme-color']")
    if (themeColor && 'content' in themeColor) themeColor.content = theme === 'light' ? '#ffffff' : '#000000'

    document.firstElementChild?.setAttribute('data-theme', theme)

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return { theme, toggleTheme }
}
