import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import Head from 'next/head'

function Search({searchResults}) {
  const router = useRouter()
  const {location, startDate, endDate, noOfGuests} = router.query
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="h-screen">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex flex-col xl:flex-row">
        <section className="flex-grow pt-14 px-6 mb-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(({img, location, title, description, star, price, total}) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
         
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[500px]">
          <Map searchResults={searchResults} />
        </section>
        <section className="xl:hidden w-full h-[360px] mb-8">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/AURF").then(res => res.json())

  return {
    props: {
      searchResults
    }
  }
}