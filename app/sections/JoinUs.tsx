import React from 'react'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const JoinUs = () => {
  return (
    <div className="">
    <div className="mx-auto max-w-7xl py-24 gap-x-8">
      <div className="mx-auto max-w-3xl sm:text-center">
      <div className="mb-6 mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white">Join Co_living in Shaping the Future</p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
          Co_living invites you to be part of a real estate revolution that goes beyond property ownership. It's about embracing change, inspiring investment, and creating a lifestyle that aligns with the needs of the current climate.
          </p>
        </div>
   
        <div className="bg-[#161B26] rounded-2xl mt-20 sm:mt-24">
  <div className="mx-auto max-w-7xl px-8 py-8 md:py-16 md:px-16 lg:flex lg:items-center lg:justify-between ">
    <div className="flex-row max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Welcome to the future of housing
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-400">
      Contact Co_living Housing Australia today and embark on a journey that transforms the way we live and invest. 
      </p>
     </div>
    <div className="mt-10 flex items-center lg:mt-0 lg:w-[260px]">
    <a
          href="#"
          className="text-center rounded-md w-full bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get in touch
        </a>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default JoinUs