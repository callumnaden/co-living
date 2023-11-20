import React from 'react'
import heroImage from "../../public/images/happy-senior-woman.jpg";
import Image from 'next/image';

const HeroMultiImg = () => {
  return (
    
      <div className="mx-auto max-w-7xl mt-16 lg:mt-0 mb-24 overflow-hidden">
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

        <div aria-hidden="true"  className="mx-auto lg:mr-0">
                  <div className="w-full">
                    <div className="flex items-center w-full space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg ">
                        <Image
                          src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg">
                        <Image
                            src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg">
                        <Image
                            src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg">
                        <Image
                            src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg">
                        <Image
                          src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg">
                        <Image
                          src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 md:h-42 md:w-70 lg:h-56 lg:w-48 overflow-hidden rounded-lg">
                        <Image
                            src={heroImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


        </div>
      </div>


  )
}

export default HeroMultiImg