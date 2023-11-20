import React from 'react'
import heroImage from "../../public/images/happy-senior-woman.jpg";
import Image from 'next/image';

const Hero = () => {
  return (
    
          <div className="mx-auto max-w-7xl mt-16 mb-24 overflow-hidden">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 items-center">
            <div className="lg:col-end-1 lg:w-full md:max-w-xl lg:pb-8">
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">
              Embracing Change,<br/>Inspiring Investment
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
              Co_living Housing Australia pioneers a distinctive approach to real estate, aligning with market trends, innovation, and the evolving lifestyle preferences of today's generation.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get in touch
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  src={heroImage}
                  alt=""
                  className="aspect-[7/5] h-[340px] lg:h-[640px] w-full lg:w-[37rem] rounded-tr-[64px] rounded-bl-[64px] bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
          </div>
    
  )
}

export default Hero