import React from "react"
import Image from "next/image";
import Link from "next/link";
export default function Blog(){
    return(
        <>
        <div className="w-full font-sans">
  {/* Blogs */}
  <div className="mx-auto px-[2rem] flex flex-col items-center justify-center my-[5rem] h-max 2xl:w-[1500px]">
    <h1 className="text-[32px] font-bold my-[1rem]">Our Blogs</h1>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-8 lg:space-y-0">
      {/* Blog 1 */}
      <div className="flex flex-col items-center">
        <Image 
          src="/assets/The Metaverse.png" 
          alt="" 
          width={350} 
          height={350} 
          className="w-[350px] h-[350px] object-cover" />
        <h1 className="text-[18px] mb-5">The Metaverse</h1>
        <p className="text-[16px] font-bold underline mb-5 text-center">
          <Link href="/The-Metaverse">Read more</Link>
        </p>
      </div>

      {/* Blog 2 */}
      <div className="flex flex-col items-center">
        <Image 
          src="/assets/Blockchain Beyond Cryptocurrencies.jpg" 
          alt="" 
          width={350} 
          height={350} 
          className="w-[350px] h-[350px] object-cover" />
        <h1 className="text-[18px] mb-5">Blockchain Beyond Cryptocurrencies</h1>
        <p className="text-[16px] font-bold underline mb-5 text-center">
          <Link href="/Blockchain-Beyond-Cryptocurrencies">Read more</Link>
        </p>
      </div>

      {/* Blog 3 */}
      <div className="flex flex-col items-center">
        <Image 
          src="/assets/The Role of Data Privacy in a Hyperconnected World.jpg" 
          alt="" 
          width={350} 
          height={350} 
          className="w-[350px] h-[350px] object-cover" />
        <h1 className="text-[18px] mb-5">Data Privacy in a Hyperconnected World</h1>
        <p className="text-[16px] font-bold underline mb-5 text-center">
          <Link href="/Data-Privacy-in-a-Hyperconnected-World">Read more</Link>
        </p>
      </div>
    </div>
    <button className="w-[8rem] h-[3rem] text-white border rounded bg-black">View More</button>
  </div>
</div>

        </>
    )
}