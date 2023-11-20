import heroImage from "../../public/images/happy-senior-woman.jpg";
import Image from 'next/image';

import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactUs() {
  return (
    
    <div className="mx-auto max-w-7xl py-24 overflow-hidden">
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


        </div>
        </div>
    <div className="grid lg:grid-cols-2 gap-x-9 items-center">
      <div className="">
      <Image
          src={heroImage}
          alt=""
          className="aspect-[7/5] hidden lg:block h-[740px] w-full rounded-2xl bg-gray-50 object-cover"
        />
      </div>
      <div className="mx-auto w-full">
        <div className="mx-auto max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white">Contact us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
        Our friendly team would love to hear from you
        </p>
        <form action="#" method="POST" className="mt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between text-sm leading-6">
                <label htmlFor="phone" className="block font-semibold text-white">
                  Phone
                </label>
                <p id="phone-description" className="text-gray-400">
                  Optional
                </p>
              </div>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  aria-describedby="phone-description"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between text-sm leading-6">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  How can we help you?
                </label>
                <p id="message-description" className="text-gray-400">
                  Max 500 characters
                </p>
              </div>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  aria-describedby="message-description"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-end pt-8">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
  )
}
