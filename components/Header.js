import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, UsersIcon } from "@heroicons/react/solid";
import {useState} from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }
  
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-12 cursor-pointer my-auto"
      >
        <Image
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"  
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-md transition duration-150">
        <input
          values={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 palceholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-full">Become a host</p>
        <div className="p-2 hover:bg-gray-100 rounded-full"><GlobeAltIcon className="hidden sm:inline h-6 cursor-pointer" /></div>
        <div className="flex items-center space-x-2 border-2 p-2 ml-2 rounded-full cursor-pointer hover:shadow-md transition duration-150">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold mb-4">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400"
            >
              Search
            </button>
          </div>
        </div>
          
      )}
    </header>
  )
}

export default Header
