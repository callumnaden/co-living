import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Affordable Residences, Shared Living',
    description:
      'Co_living introduces a unique housing model where several tenants share one roof, making it an ideal opportunity for Generation Z and Millennials to step into the property market without the traditional financial burdens.s',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Positive Geared Investment',
    description:
      'Our model allows you to purchase real estate, pay it off with small monthly instalments, and turn a profit every week. It&apos;s a transformative approach to real estate investment, ensuring that your investment works for you from the outset.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Market Trends and Innovation',
    description:
      'Our housing plan is a reflection of our commitment to providing a product that not only meets the demands of our society but also introduces a new era of lifestyle and investment.',
    href: '#',
    icon: TrashIcon,
  },
  {
    name: 'Wide Accessibility for Investors',
    description:
      'Our product is designed to be accessible to a wide range of investors, creating opportunities for financial growth and independence. Whether you&apos;re a first-time buyer or an experienced investor, our housing plan caters to diverse investment profiles.',
    href: '#',
    icon: TrashIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Welcome to Co_living</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A Revolutionary Approach to Homeownership</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Our innovative housing plan addresses the challenges faced by Generation Z and Millennials, offering a groundbreaking opportunity for first-time buyers.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
