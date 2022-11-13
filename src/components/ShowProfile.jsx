import React, { Suspense } from 'react'
import Loading from './Loading';

export default function ShowProfile({ username: username , profile_picture: profile_picture }) {
  return (
    <>
     <div className='float-right bg-gray-900 h-screen w-60 p-5'>
      <Suspense fallback={<Loading />}>
        <div className='flex-auto items-stretch'>
          <img className="rounded-full" src={localStorage.getItem("profile_picture")} />
          <p className=''>{localStorage.getItem("name")}</p>
        </div>
      </Suspense>
      </div>
    </>
  )
}
