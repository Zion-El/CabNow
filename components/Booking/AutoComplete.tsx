"use client"


import React, { useEffect, useState } from 'react'

const AutoComplete = () => {

    const [source,setSource]=useState<any>()
    const [sourceChange,setSourceChange]=useState<any>(false)
    const [destinationChange,setDestinationChange]=useState<any>(false)
    const [addressList, setAddressList] = useState<any>([])

    const [destination, setDestination] = useState<any>()

    const getAddress =async () => {
        setAddressList([])
        const query=sourceChange?source:destination;
        const res=await fetch('/api/search-address?q='+source,{
            headers:{
                "Content-Type": "application/json",  
        }
        });

        const result=await res.json();
        console.log(result)
        setAddressList(result)

    }

    useEffect(()=>{
        const delayDebounceFn=  setTimeout(()=>{
            getAddress()
        },1000)
        return () => clearTimeout(delayDebounceFn)   
    },[source,destination]);





  return (
    <div>
      <div className='relative'>
        <label className='text-gray-400'>Where From:</label>
        <input className='bg-transparent p-1 px-4 border border-yellow-500 w-full rounded-md outline-none focus:border-b-yellow-500' type="text" value={source} onChange={(e)=>{setSource(e.target.value) 
            setSourceChange(true)}} />

        {addressList?.suggestions?.length>0 && sourceChange?
            <div className='shadow-md p-1 px-4 rounded-md absolute bg-white w-full'>
                {
                    addressList.suggestions?.map((item:any, index:number)=>
                            <h2 className='text-sm py-1 border-b text-black hover:bg-yellow-400
                            cursor-pointer' key={index} onClick={()=>{
                                setSource(item.full_address)
                                setAddressList([])
                                setSourceChange(false)
                                }}>
                                {item.full_address}
                            </h2>
                        )
                    }            
            </div>        
             :
            null
         }

         <br />
         <br />

        <label className='text-gray-400'>Where To:</label>
        <input className='bg-transparent p-1 px-4 border border-yellow-500 w-full rounded-md outline-none focus:border-b-yellow-500' type="text" value={destination} onChange={(e)=>{setDestination(e.target.value)
            setDestinationChange(true)
        }}/>

        {addressList?.suggestions && destinationChange?
            <div className='shadow-md p-1 px-4 rounded-md absolute bg-white w-full'>
                {
                    addressList.suggestions?.map((item:any, index:number)=>
                            <h2 className='text-sm py-1 border-b text-black hover:bg-yellow-400
                            cursor-pointer' key={index} onClick={()=>{
                                setDestination(item.full_address)
                                setAddressList([])
                                setDestinationChange(false)
                                }}>
                                {item.full_address}
                            </h2>
                        )
                    }            
            </div>        
            :
           null
        }

 
      </div>


    </div>
  )
}

export default AutoComplete
