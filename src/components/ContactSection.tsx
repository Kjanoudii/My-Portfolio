import React from 'react'
import Image from 'next/image';
import mapIcon from "../assets/images/icons8-map-64.png";
import mailIcon from "../assets/images/icons8-mail-64.png";
const ContactSection = () => {
  return (
    <section className=" my-14 md:ml-56 md:py-6 h-full container mx-auto">
      <h6 className="font-bold uppercase mb-5 text-indigo-600">
        Dont hesitate to hit me up 👇
      </h6>

      <div className=" flex flex-col lg:flex-row justify-center md:gap-10 w-4/6">
        <div className="flex rounded-md p-3 gap-4 items-center cursor-pointer">
          <Image className="c-thin-border p-2" src={mapIcon} alt="" />
          <div>
            <h4 className="font-semibold text-gray-900">Location</h4>
            <p className=" text-gray-500">Kuwait</p>
          </div>
        </div>

        <div className="flex rounded-md p-3 gap-4 items-center cursor-pointer">
          <Image className="c-thin-border p-2" src={mailIcon} alt="" />
          <div>
            <h4 className="font-semibold text-gray-900">Email</h4>
            <p className=" text-gray-500">janoudikhaled@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection