import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header'
import HeroImg from '../components/HeroImg'
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import ExtraSmallCard from '../components/ExtraSmallCard';
import MediumCard from '../components/MediumCard';

export default function Home({exploreData, liveCardsData, discoverCardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is an Airbnb clone website. Made with NextJS and love" />
      </Head>
      <Header />
      <HeroImg />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl-grids-col-4">
            {exploreData?.map((item) => (
              <ExtraSmallCard
                key={item.id}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {liveCardsData?.map((item) => (
                <SmallCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                />
              ))}
            </div>
          </section>
          <LargeCard 
            img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
          <section className="pb-12" >
            <h2 className="text-4xl font-semibold py-8">Discover things to do</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {discoverCardsData?.map((item) => (
                <MediumCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/8IDS").then(
    (res) => res.json()
  );

  const liveCardsData = await fetch("https://jsonkeeper.com/b/OA7F").then(
    (res) => res.json()
  );

  const discoverCardsData = await fetch("https://jsonkeeper.com/b/2NQR").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      liveCardsData,
      discoverCardsData,
    },
  };
}