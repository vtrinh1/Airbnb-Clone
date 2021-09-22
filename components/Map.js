import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter"

function Map({searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter((coordinates))

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mechserker/ckstxubwm1ea817pcs0tl4jmm"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(result => (
        <div key={result.id}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl"
            >📌</p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="w-56 z-10"
            >
              {result.title}
              <img className="mt-2 rounded-xl" src={result.img} />
            </Popup>
          ):(
            false
          )}
        </div>
      ))}

    </ReactMapGL>
  )
}

export default Map
