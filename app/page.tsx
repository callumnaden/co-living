import Image from "next/image";
import coLiving from "../public/images/co-living-ha-logo.svg";
import happySenior from "../public/images/happy-senior-woman.jpg";
import happyCouple from "../public/images/happy-couple.jpg";
import manBike from "../public/images/man-bike.jpg";
import kitchenCouple from "../public/images/kitchen-couple.jpg";
import coupleBike from "../public/images/mid-couple-bike.jpg";
import glassesManRight from "../public/images/glasses-man-right.jpeg";
import mumDaughter from "../public/images/mum-daughter.jpg";
import seniorCouple from "../public/images/senior-couple.jpg";
import smilingGirl from "../public/images/smiling-girl.jpg";
import yougManPro from "../public/images/young-man-professional.jpg";
import youngSeniorMen from "../public/images/young-senior-men.jpg";
import featureImageBig from "../public/images/young-people-bike-happy.jpg";
import { FadeIn, FadeInStagger } from "./components/FadeIn";

import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  FaceSmileIcon,
  PresentationChartLineIcon,
  MapPinIcon,
  PhoneIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className=" px-8 xl:px-0">
      <header className="relative overflow-hidden">
        {/* Navbar section */}
        <FadeIn className="mx-auto max-w-7xl my-16 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-1">
            <Image priority src={coLiving} width={240} alt="Co Living Logo" />
          </div>
        </FadeIn>
        {/* Navbar section */}

        {/* Hero section */}
        <FadeInStagger className="pb-80 pt-8 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl">
            <FadeIn className="max-w-lg lg:max-w-[36rem]">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white lg:text-6xl">
                Embracing Change,
                <br />
                Inspiring Investment
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Co_living Housing Australia pioneers a distinctive approach to
                real estate, aligning with market trends, innovation, and the
                evolving lifestyle preferences of today&apos;s generation.
              </p>
            </FadeIn>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <FadeIn
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            sizes="20vw"
                            src={youngSeniorMen}
                            alt="Residents enjoying a shared kitchen area at Co Living."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            sizes="20vw"
                            src={happySenior}
                            alt="Resident enjoying a cup of coffee in kitchen area at Co Living."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            sizes="20vw"
                            src={coupleBike}
                            alt="Diverse group of residents participating in a social bike ride at Co Living."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            sizes="20vw"
                            src={happyCouple}
                            alt="Happy couple enjoying the view from Co Living communal terrace."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            sizes="20vw"
                            src={mumDaughter}
                            alt="Mum and daughter smiling and playing in Co Living housing."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            sizes="20vw"
                            src={glassesManRight}
                            alt="Man in glasses laughing and enjoying himself in Co Living space."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            sizes="20vw"
                            src={smilingGirl}
                            alt="Young resident enjoying a drink in calming area at Co Living."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 gap-y-8">
                  <div>
                    <a
                      href="#ContactUs"
                      className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get in touch
                    </a>
                  </div>
                  <div>
                    <a
                      href="#AboutUs"
                      className="leading-6 rounded-md px-6 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Learn more{" "}
                      <span aria-hidden="true" className="animate-bounce">
                        ↓
                      </span>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </FadeInStagger>
      </header>

      {/* Feature section */}
      <FadeInStagger id="AboutUs" className=" bg-gray-950 ">
        <div className="mx-auto max-w-7xl pt-48 pb-24">
          <FadeIn className="mx-auto max-w-3xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Welcome to Co_living
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              A Revolutionary Approach to Homeownership
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our innovative housing plan addresses the challenges faced by
              Generation Z and Millennials, offering a groundbreaking
              opportunity for first-time buyers.
            </p>
          </FadeIn>

          <div className="grid grid-flow-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 md:grid-row-3 lg:grid-row-2 gap-x-8 gap-y-16 md:gap-x-12 lg:gap-x-2 items-center">
            <FadeIn className="flex flex-col col-1 p-0 lg:pr-12">
              <div className="text-xl font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <CurrencyDollarIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Affordable Residences, <br className="hidden sm:block" />
                Shared Living
              </div>
              <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Co_living introduces a unique housing model where several
                  tenants share one roof, making it an ideal opportunity for
                  Generation Z and Millennials to step into the property market
                  without the traditional financial burdens.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col col-1 lg:pl-12">
              <div className="text-xl font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <PresentationChartLineIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Market Trends and Innovation
              </div>
              <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Our housing plan is a reflection of our commitment to
                  providing a product that not only meets the demands of our
                  society but also introduces a new era of lifestyle and
                  investment.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="col-span-1 row-span-2 sm:col-span-2 row-start-5 row-end-6  sm:row-start-3 sm:row-end-4	lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-end-3">
              <Image
                sizes="50vw"
                src={happyCouple}
                alt="Happy couple enjoying the view from Co Living communal terrace."
                className="aspect-[7/5] h-full w-full sm:h-[340px] lg:h-[640px] rounded-2xl bg-gray-50 object-cover"
              />
            </FadeIn>

            <FadeIn className="flex flex-col col-1 lg:pr-12">
              <div className="text-xl font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <ArrowTrendingUpIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Positive Geared Investment
              </div>
              <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Our model allows you to purchase real estate, pay it off with
                  small monthly instalments, and turn a profit every week.
                  It&apos;s a transformative approach to real estate investment,
                  ensuring that your investment works for you from the outset.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col col-1 lg:pl-12">
              <div className="text-xl font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <FaceSmileIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Wide Accessibility for Investors
              </div>
              <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Our product is designed to be accessible to a wide range of
                  investors, creating opportunities for financial growth and
                  independence. Whether you&apos;re a first-time buyer or an
                  experienced investor, our housing plan caters to diverse
                  investment profiles.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeInStagger>
      {/* Feature section */}

      {/* Investing section */}
      <FadeInStagger className="py-24">
        <FadeIn className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Investing with Co_living
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Gateway to Financial Freedom
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We understand the importance of making your money work for you,
              and our properties are meticulously curated to offer a dual
              benefit &ndash; a home and an investment. From the day you sign,
              your investment starts generating income, providing you with a
              solid foundation for financial growth.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl">
            <Image
              sizes="60vw"
              src={featureImageBig}
              alt="Two care-free Co Living women residents enjoing a bike ride in the sun."
              className="mb-[-12%] rounded-2xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-950 pt-[7%]" />
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>
      {/* Investing section */}

      {/* Values section */}
      <FadeInStagger className="mx-auto max-w-7xl py-24 sm:text-center">
        <FadeIn className="sm:mx-auto max-w-3xl mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Our vision
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Building Communities, One Home at a Time
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            At Co_living, we believe that where you live should be more than
            just a place; it should be a community that nurtures your lifestyle
            and fosters connections.
          </p>
          <p className="mt-6 text-base leading-8 text-gray-400">
            Based in the vibrant city of Melbourne, we are a forward-thinking
            company dedicated to revolutionising the way individuals experience
            home. Our journey began with a simple yet powerful idea: to create
            affordable, communal spaces that cater to diverse needs and
            demographics.
          </p>
        </FadeIn>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <FadeIn className="">
            <dt className="text-xl font-semibold leading-7 text-white mt-1">
              Innovative Design, Thoughtful Living
            </dt>
            <dd className="mt-3 text-gray-400">
              What sets us apart is our commitment to innovation in design and a
              focus on thoughtful living. Our Melbourne-based properties are
              carefully curated to blend functionality, aesthetics, and
              sustainability, creating spaces that feel like home from the
              moment you step in.
            </dd>
          </FadeIn>
          <FadeIn className="">
            <dt className="text-xl font-semibold leading-7 text-white mt-1">
              A Place Where You Belong
            </dt>
            <dd className="mt-3 text-gray-400">
              Co_living is more than a housing solution; it&apos;s a lifestyle
              choice. We foster a sense of belonging and camaraderie among our
              residents. From shared common spaces to community events, we
              strive to create an environment where meaningful connections are
              formed.
            </dd>
          </FadeIn>
          <FadeIn className="">
            <dt className="text-xl font-semibold leading-7 text-white mt-1">
              Tailored Living Experiences
            </dt>
            <dd className="mt-3 text-gray-400">
              Whether you&apos;re a young professional seeking a dynamic urban
              lifestyle or a senior adult looking for a supportive community,
              Co_living has a place for you. Our Melbourne-based residences
              cater to a diverse range of needs, ensuring that your living
              experience is tailored to your unique preferences.
            </dd>
          </FadeIn>
        </dl>
      </FadeInStagger>

      {/* Values section */}

      <section aria-labelledby="sale-heading " className="my-32 ">
        <FadeInStagger className="overflow-hidden sm:pt-14 max-w-7xl mx-auto">
          <div className="">
            <div className="mx-auto max-w-7xl">
              <Image
                sizes="20vw"
                src={seniorCouple}
                alt="App screenshot"
                className="mb-[-12%] sm:hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />

              <div className="relative py-2 sm:pt-48 sm:pb-24">
                <FadeIn className="mx-w-full sm:max-w-lg mt-24 sm:mt-0 sm:pb-32">
                  <h2
                    id="sale-heading"
                    className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                  >
                    Welcome to the
                    <br />
                    future of housing
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xs lg:max-w-lg">
                    Contact Co_living Housing Australia today and embark on a
                    journey that transforms the way we live and invest.
                  </p>
                  <div className="mt-6 text-base">
                    <a
                      href="#ContactUs"
                      className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get in touch
                    </a>
                  </div>
                </FadeIn>

                <div className="absolute hidden sm:block -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <FadeIn className="flex-shrink-0">
                        <Image
                          sizes="20vw"
                          className="h-full w-64 rounded-lg object-top object-cover md:h-72 md:w-72"
                          src={yougManPro}
                          alt="Young professional guy enjoying working from home at Co Living."
                        />
                      </FadeIn>

                      <FadeIn className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          sizes="20vw"
                          className="h-full w-64 rounded-lg object-top object-cover md:h-72 md:w-72"
                          src={seniorCouple}
                          alt="Senior residents enjoying their own space at Co_Living."
                        />
                      </FadeIn>
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <FadeIn className="flex-shrink-0">
                        <Image
                          sizes="20vw"
                          className="h-full w-64 rounded-lg object-top object-cover md:h-72 md:w-72"
                          src={kitchenCouple}
                          alt="Communal kitchen space at Co_Living, featuring shared cooking facilities."
                        />
                      </FadeIn>

                      <FadeIn className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          sizes="20vw"
                          className="h-full w-64 rounded-lg object-top object-cover md:h-72 md:w-72"
                          src={manBike}
                          alt="Co Living resident enjoying his morning bike ride to the office."
                        />
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInStagger>
      </section>

      <FadeInStagger id="ContactUs" className="mx-auto max-w-7xl py-24 gap-x-8">
        <FadeIn className="mx-auto max-w-3xl sm:text-center">
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our friendly team would love to hear from you
          </p>
        </FadeIn>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 text-base leading-7 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
            <FadeIn className=" bg-gray-900 rounded-2xl mx-auto px-8 py-8 w-full">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white">Our office</h3>
              <address className="not-italic text-gray-400">
                <p>427 Docklands Drive, Docklands VIC 3008</p>
              </address>
            </FadeIn>
            <FadeIn className=" bg-gray-900 rounded-2xl mx-auto px-8 py-8 w-full">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white">Call us</h3>
              <address className="not-italic text-gray-400">
                <p>
                  Mon-Fri from 8am to 5pm:{" "}
                  <a
                    className="text-gray-400 hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    href="tel:0403 063 917"
                  >
                    0403 063 917
                  </a>
                </p>
              </address>
            </FadeIn>
            <FadeIn className=" bg-gray-900 rounded-2xl mx-auto px-8 py-8 w-full">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white">Support</h3>
              <address className="not-italic text-gray-400">
                <p>
                  We&apos;re here to help:{" "}
                  <a
                    className="text-gray-400 hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    href="mailto:admin@clha.au"
                  >
                    admin@clha.au
                  </a>
                </p>
              </address>
            </FadeIn>
          </div>
        </div>
      </FadeInStagger>

      {/* Footer section */}
      <div className="mx-auto max-w-7xl pt-24 pb-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-1">
          <Image priority src={coLiving} width={200} alt="Co Living Logo" />
        </div>
        <div className="mt-8 md:order-2 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2027 Co_living. All rights reserved.
          </p>
        </div>
      </div>
      {/* Footer section */}
    </main>
  );
}
