import { ThemeSwitcherFeature } from '@/features/theme-switcher'
import classNames from 'classnames'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { $modalIsActive } from '../models/modal'

export function ModalFeature() {
  const modalIsActive = useStore($modalIsActive)

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={classNames(
        'absolute flex flex-col items-center gap-y-9 duration-500',
        modalIsActive ? 'opacity-100 delay-500' : 'invisible opacity-0',
      )}
    >
      <nav>
        <ul className="flex flex-col items-center gap-y-2 text-base font-bold tracking-[4px] sm:flex-row sm:gap-x-4 sm:text-xl">
          <li className="hover:text-yellow-500 hover:duration-500">
            <Link href="https://xlebpushek.com">HOME</Link>
          </li>
          <li className="hover:text-red-500 hover:duration-500">
            <Link href="https://xlebpushek.com/works">WORKS</Link>
          </li>
          <li className="hover:text-emerald-500 hover:duration-500">
            <Link href="https://xlebpushek.com/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitcherFeature />
    </div>
  )
}
