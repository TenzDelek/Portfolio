import React from 'react'

const loading = () => {
  return (
   <>
    <div className="rounded-md p-4 lg:w-[560px] md:w-[480px] m-auto bg-[#272727] animate-pulse h-52 mx-auto">
    <div className="animate-pulse flex space-x-4"/>
        </div>
<div className="rounded-md p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-[#272727]  h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-[#272727]  rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-[#272727]  rounded col-span-2"></div>
            <div className="h-2 bg-[#272727]  rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-[#272727]  rounded"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="rounded-md p-4 w-full bg-[#272727] animate-pulse h-52 mx-auto">
    <div className="animate-pulse flex space-x-4"/>
        </div>
<div className="rounded-md p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-[#272727]  h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-[#272727]  rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-[#272727]  rounded col-span-2"></div>
            <div className="h-2 bg-[#272727]  rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-[#272727]  rounded"></div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default loading