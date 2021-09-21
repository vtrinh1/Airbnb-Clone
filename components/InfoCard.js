import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

function InfoCard({img, location, title, description, star, price, total}) {
  return (
    <div className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg md:pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-52 md:w-80 flex-shrink-0">
      {/* h-24 w-40 */}
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow md:pl-5 pt-5 md:pt-0">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 md:h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{total}</p>
            <p className="text-right font-extralight">{price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
