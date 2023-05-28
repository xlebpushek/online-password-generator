import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function AboutWidget() {
  const descriptionRef = useRef<HTMLHeadingElement>(null)
  const typedRef = useRef<Typed>()

  useEffect(() => {
    if (descriptionRef.current)
      typedRef.current = new Typed(descriptionRef.current, {
        strings: [
          'The key feature of this online password generator is the <span class="text-cyan-400">segmentation</span> or so-called block representation of the password, where each block is completely unique and separated by a custom character. <span class="text-cyan-400">This approach is more readable.</span> And also this generator works by means of a <span class="text-emerald-400">cryptographic algorithm</span> for generating pseudorandom numbers <span class="text-emerald-400">Blum Blum Shub</span>.',
        ],
        typeSpeed: 20,
        showCursor: false,
      })

    return () => {
      if (typedRef.current) typedRef.current.destroy()
    }
  }, [])

  const goToGenerationHandler = () => document.getElementById('generation')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center">
      <div className="mt-20 flex h-[85%] w-[80%] flex-col items-center justify-center gap-y-14 lg:w-[50%] xl:h-[70%]">
        <h1 ref={descriptionRef} className="text-justify text-base sm:text-xl"></h1>
        <button
          onClick={goToGenerationHandler}
          className="animate-pulse rounded-xl px-2 py-3 text-base font-bold backdrop-blur-md hover:animate-none sm:text-xl"
        >
          Go to generation
        </button>
      </div>
    </section>
  )
}
