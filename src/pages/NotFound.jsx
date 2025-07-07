import React from 'react'
import Background from '../components/Background'
import { CircleArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="bg-[#05080F]">
      <Background />

      <div className="w-screen h-screen flex flex-col justify-center items-center gap-9">
        <div className="px-5 flex flex-col">
          <p className="text-xs sm:text-sm text-background font-jost font-medium select-none tracking-widest">
            PAGE NOT FOUND
          </p>

          <p className="text-7xl sm:text-8xl text-background font-jost font-bold select-none">
            404
          </p>

          <p className="text-sm sm:text-base text-background font-jost font-semibold select-none mt-4 tracking-wider">
            I'M SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </p>
        </div>

        <a 
          href="/"
          className="cosmic-button flex items-center gap-2"
        >
          <CircleArrowLeft />
          Go Back
        </a>
      </div>
    </div>
  )
}

export default NotFound
