import React from 'react'
import heroImage from "../../public/images/happy-senior-woman.jpg";
import Image from 'next/image';

const HeroSlider = () => {
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
        <div className="flex flex-wrap items-start justify-end gap-8 lg:contents">
          <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            
    
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                  <Image
                    src={heroImage}
                    alt=""
                    className="aspect-[7/5] h-[340px] lg:h-[640px] w-full rounded-tr-[64px] rounded-bl-[64px] bg-gray-50 object-cover"
                  />
              </div> 
              <div id="item2" className="carousel-item w-full">
                  <Image
                    src={heroImage}
                    alt=""
                    className="aspect-[7/5] h-[340px] lg:h-[640px] w-full rounded-tr-[64px] rounded-bl-[64px] bg-gray-50 object-cover"
                  />
              </div> 
              <div id="item3" className="carousel-item w-full">
                  <Image
                    src={heroImage}
                    alt=""
                    className="aspect-[7/5] h-[340px] lg:h-[640px] w-full rounded-tr-[64px] rounded-bl-[64px] bg-gray-50 object-cover"
                  />
              </div> 
              <div id="item4" className="carousel-item w-full">
                  <Image
                    src={heroImage}
                    alt=""
                    className="aspect-[7/5] h-[340px] lg:h-[640px] w-full rounded-tr-[64px] rounded-bl-[64px] bg-gray-50 object-cover"
                  />
              </div>
            </div> 
            <div className="flex justify-center w-full py-4 gap-2">
              <a href="#item1" className="overscroll-bounce bg-gray-50 h-1 rounded-xl w-20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></a> 
              <a href="#item2" className="overscroll-bounce bg-gray-50 h-1 rounded-xl w-20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></a> 
              <a href="#item3" className="overscroll-bounce bg-gray-50 h-1 rounded-xl w-20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></a> 
              <a href="#item4" className="overscroll-bounce bg-gray-50 h-1 rounded-xl w-20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></a>
            </div>


          </div>
        </div>
      </div>
      </div>
  )
}

export default HeroSlider