"use client"
import Booking from '@/components/Booking/Booking'
import MapBox from '@/components/Map/MapBox'
import { UserLocationContext } from '@/context/UserLocationContext'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {

  const [userLocation, setUserLocation] = useState<any>()

  useEffect(() => {
    const getUserLocation = () =>{
      navigator.geolocation.getCurrentPosition(function(pos){
        // console.log("hello",pos)
        setUserLocation({
          lat:pos.coords.latitude,
          lng:pos.coords.longitude,
        })
      })
    }

    getUserLocation()
  

  }, [])
  return (
    <div>
      <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
        <div className='grid grid-col-1 md:grid-cols-3'>
          <div>
            <Booking/>
          </div>
          <div className='col-span-2 order-first lg:order-last'>
            <MapBox/>
          </div>
        </div>
      </UserLocationContext.Provider>

    </div>
  )
}
