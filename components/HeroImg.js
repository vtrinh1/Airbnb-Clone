import Image from "next/image";
import React from 'react'
import { useRouter } from "next/dist/client/router";
import { data } from "autoprefixer";

function HeroImg() {
  const router = useRouter()
  const date = new Date()
  const startDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  const endDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: "Sydney",
        startDate: startDate,
        endDate: endDate,
        noOfGuests: 2,
      }
    })
  }
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold">Not sure where to go? Perfect.</p>
        <button onClick={search} className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  )
}

export default HeroImg
