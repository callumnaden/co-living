import React from 'react'
import Image from 'next/image'
import coLiving from "../../public/images/co-living-ha-logo.svg";
  
  export default function Footer() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-1">
          <Image
            priority
            src={coLiving}
            width={200}
            alt=""
            />
          </div>
          <div className="mt-8 md:order-2 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2027 Co_living. All rights reserved.
            </p>
          </div>
        </div>
    )
  }
  