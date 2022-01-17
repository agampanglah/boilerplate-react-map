

import React from 'react'
import { MapContainer, ZoomControl } from "react-leaflet"
import HereTileLayers from '../TileLayer/hereTileLayers'
const hereAppCode = '0XXQyxbiCjVU7jN2URXuhg'
const hereAppId = 'yATlKFDZwdLtjHzyTeCK'
function Map () {
  const hereReducedDay = HereTileLayers.here({
    appId: hereAppId,
    appCode: hereAppCode,
    scheme: 'reduced.day'
  })

  const center = {
    lat: -6.352810,
    lng: 106.728798,
  }
  const style = {
    width: '100%',
    height: '100vh'
  }

      return (
          <>
            <div>
              <MapContainer
              zoomControl={false}
                center = {center}
                zoom = {13}
                scrollWheelZoom = {true}
                style={style}
                layers={hereReducedDay}
                attributionControl={false}
              >
                <ZoomControl position="topright" />
              </MapContainer>
            </div>
          </>
      );
    }


export default Map