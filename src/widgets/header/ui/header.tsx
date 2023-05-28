'use client'

import classNames from 'classnames'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { $modalIsActive, setModalIsActive } from '../models/modal'
import { ModalFeature } from './modal'

export function HeaderWidget() {
  const { isScrollingUp, isScrollingDown } = useScrollDirection()

  const [scrollDirection, setScrollDirection] = useState<'UP' | 'DOWN'>('UP')

  useEffect(() => {
    if (isScrollingUp) setScrollDirection('UP')
    else if (isScrollingDown) setScrollDirection('DOWN')
  }, [isScrollingUp, isScrollingDown])

  const modalIsActive = useStore($modalIsActive)

  const handleModalIsActive = (modalIsActive: boolean) => {
    setModalIsActive(!modalIsActive)

    document.body.classList.toggle('no-scroll')
  }

  return (
    <header
      onClick={() => handleModalIsActive(modalIsActive)}
      className={classNames(
        'group fixed z-10 flex w-full flex-col bg-light/80 transition-[top,height,opacity,backdrop-filter] duration-750 dark:bg-dark/80',
        scrollDirection === 'DOWN' ? '-top-20 opacity-0' : 'top-0 opacity-100',
        modalIsActive ? 'h-screen backdrop-blur-md' : 'h-20 backdrop-blur-sm',
      )}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <hr
          className={classNames(
            'absolute h-[2px] rounded-md bg-dark brightness-50 transition-[top,height,width,opacity] duration-750 dark:bg-light',
            modalIsActive
              ? 'top-20 w-9/12 opacity-100'
              : 'top-0 w-11/12 opacity-0 group-hover:w-20 group-hover:opacity-100',
          )}
        />
        <h1
          className={classNames(
            'text-3xl font-bold uppercase transition-opacity duration-500',
            modalIsActive ? 'opacity-0' : 'animate-pulse opacity-100 delay-500 group-hover:animate-none',
          )}
        >
          MENU
        </h1>
        <ModalFeature />
        <hr
          className={classNames(
            'absolute h-[2px] rounded-md bg-dark brightness-50 transition-[bottom,height,width] duration-750 dark:bg-light',
            modalIsActive ? 'bottom-20 w-9/12' : 'bottom-0 w-11/12 group-hover:w-20',
          )}
        />
      </div>
    </header>
  )
}
