import { GlobeAltIcon } from '@heroicons/react/solid'
import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

function Footer() {
  return (
    <div className="border-t-2 bg-gray-100 md:px-32 px-12 py-6 md:py-14">
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-y-10 text-gray-600 border-b-2">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
            <div className="border-b-2 lg:border-b-0 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
              <p className="py-2 cursor-pointer hover:underline">How Aribnb works</p>
              <p className="py-2 cursor-pointer hover:underline">Newsroom</p>
              <p className="py-2 cursor-pointer hover:underline">Investors</p>
              <p className="py-2 cursor-pointer hover:underline">Airbnb Plus</p>
              <p className="py-2 cursor-pointer hover:underline">Airbnb Luxe</p>
              <p className="py-2 cursor-pointer hover:underline">HotelTonight</p>
              <p className="py-2 cursor-pointer hover:underline">Airbnb for Work</p>
              <p className="py-2 cursor-pointer hover:underline">Made possible by Hosts</p>
              <p className="py-2 cursor-pointer hover:underline">Careers</p>
              <p className="py-2 cursor-pointer hover:underline">Founders' Letter</p>
            </div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
            <div className="border-b-2 lg:border-b-0 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
              <p className="py-2 cursor-pointer hover:underline">Diversity & Belonging</p>
              <p className="py-2 cursor-pointer hover:underline">Accessibility</p>
              <p className="py-2 cursor-pointer hover:underline">Airbnb Associates</p>
              <p className="py-2 cursor-pointer hover:underline">Host Afghan refugees</p>
              <p className="py-2 cursor-pointer hover:underline">Guest Referrals</p>
              <p className="py-2 cursor-pointer hover:underline">Airbnb.org</p>
            </div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
            <div className="border-b-2 lg:border-b-0 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
              <p className="py-2 cursor-pointer hover:underline">Host your home</p>
              <p className="py-2 cursor-pointer hover:underline">Host an Online Experience</p>
              <p className="py-2 cursor-pointer hover:underline">Host an Experience</p>
              <p className="py-2 cursor-pointer hover:underline">Responsible hosting</p>
              <p className="py-2 cursor-pointer hover:underline">Resource Centre</p>
              <p className="py-2 cursor-pointer hover:underline">Community Centre</p>
            </div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
            <div className="pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
              <p className="py-2 cursor-pointer hover:underline">Our COVID-19 Response</p>
              <p className="py-2 cursor-pointer hover:underline">Help Centre</p>
              <p className="py-2 cursor-pointer hover:underline">Cancellation options</p>
              <p className="py-2 cursor-pointer hover:underline">Neighbourhood Support</p>
              <p className="py-2 cursor-pointer hover:underline">Trust & Safety</p>
            </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col-reverse items-center lg:flex-row justify-between">
          <div className="pt-4 lg:pt-0 text-center">
            © 2021 Airbnb, Inc. · <span className="cursor-pointer hover:underline hover:text-gray-600">Privacy</span> · <span className="cursor-pointer hover:underline hover:text-gray-600">Terms</span> · <span className="cursor-pointer hover:underline hover:text-gray-600">Sitemap</span>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row space-x-4">
              <GlobeAltIcon className="h-6 cursor-pointer hover:text-gray-600" />
              <p className="underline cursor-pointer hover:text-gray-600"> English (AU)</p>
              <p className="cursor-pointer hover:text-gray-600">$ <span className="underline">AUD</span></p>
            </div>
            <div className="hidden sm:inline-flex flex-row space-x-6 text-xl pl-12 ">
              <FaFacebookF className="hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="hover:text-gray-600 cursor-pointer" />
              <ImInstagram className="hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
