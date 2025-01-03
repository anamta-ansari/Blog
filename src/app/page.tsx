import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <div
        className="mx-auto px-[2rem] flex flex-col items-center justify-center py-[5rem] h-[800px] 2xl:w-[1500px] bg-cover bg-center"
        }
      >
        <h1 className="text-[48px] my-[0.5rem] font-bold text-center text-black">
          Exploring the Future of Innovation and Technology
        </h1>
        <p className="text-[20px] mb-[2rem] text-center text-black">
          Stay updated with the latest breakthroughs, trends, and insights in the
          world of technology. From AI and blockchain to gadgets and software, we
          cover the stories shaping tomorrow&apos;s digital landscape.
        </p>
        <Link href="/About" passHref>
          <button className="w-[10rem] h-[4rem] text-white border rounded bg-black">
            Read More
          </button>
        </Link>
      </div>

      {/* About */}
      <div className="mx-auto px-[2rem] py-[5rem] flex flex-col lg:flex-row items-center justify-center h-max 2xl:w-[1500px]">
        <div className="w-[100%] lg:w-[50%]">
          <Image
            src="/assets/img-1.png"
            alt="Description of image"
            width={600}
            height={500}
          />
        </div>
        <div className="w-[100%] lg:w-[50%] mt-[2rem] lg:mt-0">
          <h1 className="text-[42px] font-bold mb-[0.5rem]">About Us</h1>
          <p className="text-[18px] mb-[1rem]">
            Stay updated with the latest breakthroughs, trends, and insights in
            the world of technology. From AI and blockchain to gadgets and
            software, we cover the stories shaping tomorrow&apos;s digital landscape.
            Our team of experts explores the cutting-edge innovations that are
            revolutionizing industries and transforming the way we live and work.
            Stay informed on emerging technologies, from quantum computing to IoT,
            and understand their potential impact on the future. We provide in-depth
            analysis, interviews with thought leaders, and real-world case studies
            to keep you ahead in the fast-paced world of tech. Join us on this
            journey as we navigate the digital frontier and uncover the technologies
            that will define the next generation.
          </p>
          <Link href="/About" passHref>
            <button className="w-[8rem] h-[3rem] text-white border rounded bg-black">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Blogs */}
      <div className="mx-auto px-[2rem] flex flex-col items-center justify-center my-[5rem] h-max 2xl:w-[1500px]">
        <h1 className="text-[32px] font-bold my-[1rem]">Our Blogs</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Blog 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/The Metaverse.png"
              alt="The Metaverse"
              width={350}
              height={350}
              className="w-[350px] h-[350px] object-cover"
            />
            <h1 className="text-[18px] mb-5">The Metaverse</h1>
            <p className="text-[16px] font-bold underline mb-5 text-center">
              <Link href="/The-Metaverse" passHref>
                Read more
              </Link>
            </p>
          </div>

          {/* Blog 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/Blockchain Beyond Cryptocurrencies.jpg"
              alt="Blockchain Beyond Cryptocurrencies"
              width={350}
              height={350}
              className="w-[350px] h-[350px] object-cover"
            />
            <h1 className="text-[18px] mb-5">Blockchain Beyond Cryptocurrencies</h1>
            <p className="text-[16px] font-bold underline mb-5 text-center">
              <Link href="/Blockchain-Beyond-Cryptocurrencies" passHref>
                Read more
              </Link>
            </p>
          </div>

          {/* Blog 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/The Role of Data Privacy in a Hyperconnected World.jpg"
              alt="Data Privacy in a Hyperconnected World"
              width={350}
              height={350}
              className="w-[350px] h-[350px] object-cover"
            />
            <h1 className="text-[18px] mb-5">Data Privacy in a Hyperconnected World</h1>
            <p className="text-[16px] font-bold underline mb-5 text-center">
              <Link href="/Data-Privacy-in-a-Hyperconnected-World" passHref>
                Read more
              </Link>
            </p>
          </div>
        </div>
        <Link href="/Blog" passHref>
          <button className="w-[8rem] h-[3rem] text-white border rounded bg-black">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
