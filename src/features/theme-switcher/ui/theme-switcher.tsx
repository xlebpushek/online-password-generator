'use client'

import { useTheme } from 'shared/lib/theme'

export function ThemeSwitcherFeature() {
  const { toggleTheme } = useTheme()

  const toggleThemeHandler = () => toggleTheme()

  return (
    <button onClick={toggleThemeHandler}>
      <svg className="sun-and-moon" aria-hidden="true" width="26" height="26" viewBox="0 0 24 24">
        <circle
          className="origin-center transition-transform duration-500 ease-elastic-3 dark:scale-[1.75] dark:duration-250 dark:ease-3"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />

        <g
          className="origin-center stroke-2 transition-[transform_.5s_ease-elastic-4,opacity_.5_ease-3] dark:-rotate-25 dark:opacity-0 dark:duration-150"
          stroke="currentColor"
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>

        <mask className="origin-center" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle
            cx="24"
            cy="10"
            r="6"
            fill="black"
            className="transition-[transform_.25s_ease-out-5,cx_.25s_ease-out-5] dark:-translate-x-[7px] dark:delay-500 dark:duration-250"
          />
        </mask>
      </svg>
    </button>
  )
}
