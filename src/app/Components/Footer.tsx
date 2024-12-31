import Link from "next/link";
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="w-full bg-black px-[5rem] pt-[5rem] text-white h-max">
        <div className="mx-auto px-[2rem] 2xl:w-[1500px]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            {/* Blog Section */}
            <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
              <h1 className="text-[32px] font-sans">BLOG</h1>
              <p>Your go-to destination for the latest trends, insights, and innovations in technology</p>
            </div>

            {/* Links Section */}
            <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
              <h1 className="text-[32px] font-sans">Links</h1>
              <p className="text-[18px] font-sans">
                <Link href="/">HOME</Link>
              </p>
              <p className="text-[18px] font-sans">
                <Link href="/About">ABOUT</Link>
              </p>
              <p className="text-[18px] font-sans">
                <Link href="/Blog">BLOG</Link>
              </p>
            </div>

            {/* Contact Section */}
            <div className="w-full sm:w-[30%]">
              <h1 className="text-[32px] font-sans">Contact</h1>
              {/* Location Section */}
              <div className="flex gap-[0.5rem] items-center mb-4">
                <FaMapMarkerAlt className="h-[1rem] w-[1rem]" />
                <span className="text-[18px] font-sans">Location: 123 Main St, City, Country</span>
              </div>
              {/* Email Section */}
              <div className="flex gap-[0.5rem] mb-4">
                <FaEnvelope className="h-[1rem] w-[1rem]" />
                <span>Email: example@email.com</span>
              </div>
              {/* Phone Section */}
              <div className="flex gap-[0.5rem] items-center">
                <FaPhone className="h-[1rem] w-[1rem]" />
                <span className="text-[18px] font-sans">Phone: +1234567890</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="mt-[5rem] border-t-2 border-gray-300" />

          {/* Footer copyright */}
          <div className="text-center mt-[1rem] text-gray-600">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
