import React from 'react'
import Image from 'next/image';
import coLiving from "../../public/images/co-living-ha-logo.svg";


const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl mt-16 md:flex md:items-center md:justify-between">
    <div className="flex justify-center space-x-6 md:order-1">
    <Image
      priority
      src={coLiving}
      width={240}
      alt=""
      />
    </div>
    <div className="hidden md:block md:order-2 md:mt-0">
      <a href="#" className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Get in touch
        </a>
    </div>
  </div>
  )
}

export default Navbar