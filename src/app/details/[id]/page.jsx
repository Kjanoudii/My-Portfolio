import React from 'react'
import Image from 'next/image';
import Navbar from '../../../components/NavBar'
export const page = ({img, name , type}) => {
  return (
    <main>
      <div className="max-h-full">
        <Navbar/>
        <div className="px-28 ">
          <p className="text-sm font-thin py-3 text-gray-500">
            {type}
          </p>

          <h2
            className="pr-5 text-3xl 
       font-bold text-gray-700 uppercase pb-5"
          >
            {name}
          </h2>

          <p className="text-gray-500 pb-4">
          tybntnyunj
          </p>
          <Image
            className="pb-6"
            src={img}
            width={400}
            height={300}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
