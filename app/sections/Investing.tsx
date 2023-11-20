import featureImageBig from "../../public/images/young-people-bike-happy.jpg";
import Image from 'next/image';
  
  export default function Investing() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Investing with Co_living</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Your Gateway to Financial Freedom</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            We understand the importance of making your money work for you, and our properties are meticulously curated to offer a dual benefit – a home and an investment. From the day you sign, your investment starts generating income, providing you with a solid foundation for financial growth.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src={featureImageBig}
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  