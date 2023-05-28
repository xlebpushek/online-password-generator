'use client'

import classNames from 'classnames'
import { useStore } from 'effector-react'
import { IoClose } from 'react-icons/io5'
import { $modalIsActive, setModalIsActive } from '../../models/modal'
import { GeneralOptionsWidget } from './general-options'
import { SegmentsOptionsWidget } from './segments-options/segments-options'

export function ModalFeature() {
  const setModalIsActiveHandler = () => {
    document.firstElementChild?.classList.toggle('no-scroll')

    setModalIsActive(false)
  }

  const modalIsActive = useStore($modalIsActive)

  return (
    <div
      onClick={setModalIsActiveHandler}
      className={classNames(
        'absolute flex h-full w-full items-center justify-center duration-500',
        modalIsActive ? 'opacity-100 delay-500' : 'invisible opacity-0',
      )}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="hide-scrollbar relative z-10 flex h-5/6 w-11/12 flex-col gap-y-7 rounded-xl bg-light/5 p-10 shadow-2xl shadow-dark/10 backdrop-blur-md dark:bg-dark/50 dark:shadow-light/10  lg:rounded-3xl"
      >
        <GeneralOptionsWidget />
        <SegmentsOptionsWidget />
        <button onClick={setModalIsActiveHandler} className="absolute right-7 top-7 md:hidden">
          <IoClose size={28} />
        </button>
      </div>
    </div>
  )
}
