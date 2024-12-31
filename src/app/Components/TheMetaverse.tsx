"use client"
import Image from "next/image";
import  { useState } from 'react';

export default function TheMetaverse(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // You can send the email and message to a backend here
      console.log('Email:', email);
      console.log('Message:', message);
      
      // Reset fields after submission
      setEmail('');
      setMessage('');
    }

    return(
        <>
        <div className="w-full font-sans">
 
  <div className="mx-auto px-[2rem]   my-[5rem] h-max 2xl:w-[1500px]">
  <h1 className="text-[32px] font-bold my-[1rem]">The Metaverse</h1>
  <Image 
            src="/assets/The Metaverse.png" 
            alt="" 
            width={800} 
            height={600} 
            className="w-[800px] h-[600px] my-[1rem] object-cover" />
        <p className="text-[20px]">The Metaverse is a virtual universe where people can interact, socialize, work, and play through immersive digital environments. It combines virtual reality (VR), augmented reality (AR), and blockchain technology to create interconnected spaces where users can engage in a variety of activities. Users enter this digital world through avatars and can purchase virtual goods, services, and real estate, often using cryptocurrencies and non-fungible tokens (NFTs).
<br/>
The Metaverse brings a transformative shift in how people experience the digital world. Key features include:
<ol>
    <li><b>Immersive Experiences:</b> VR and AR allow users to engage with digital environments in more interactive ways. VR offers fully immersive, 3D experiences, while AR integrates digital elements into the real world.</li>
    <li><b>Digital Economy:</b> Virtual assets, including virtual land, clothing for avatars, and digital art, are bought and sold. Cryptocurrency, especially NFTs, provide ownership and proof of value for these digital goods.</li>
    <li><b>Social and Work Interactions:</b> The Metaverse enables users to socialize through avatars, attend virtual events, and work collaboratively in virtual spaces. Companies are exploring virtual offices, changing the way remote work is conducted.</li>
    <li><b>Social and Work Interactions:</b> The Metaverse enables users to socialize through avatars, attend virtual events, and work collaboratively in virtual spaces. Companies are exploring virtual offices, changing the way remote work is conducted.</li>
</ol>
<br/>
<b className="text-[24px]">Economic Potential</b> <br/>
The Metaverse is not just about entertainment but also represents an economic frontier. Companies are investing heavily in creating virtual experiences for marketing, business meetings, and product sales. Virtual real estate has become a hot commodity, with platforms like Decentraland and The Sandbox allowing users to buy, sell, and develop digital properties. The potential for digital fashion and NFTs has also opened up new revenue streams, with artists and brands creating unique digital goods for sale.
<br/>
<br/>
<b className="text-[24px]">Social and Cultural Impact</b> <br/>
The Metaverse is changing how people interact socially and express themselves. Avatars provide a way for individuals to create alternate versions of themselves, offering new avenues for identity expression. The rise of virtual art galleries, live concerts, and other creative spaces highlights how the Metaverse is expanding opportunities for digital creators. However, there are concerns about the psychological effects of long-term immersion in these digital spaces and potential issues around privacy and identity.
<br/>
<br/>
<b className="text-[24px]">The Future</b> <br/>
While the Metaverse is still in its early stages, its potential to revolutionize entertainment, business, and social interaction is clear. Major tech companies like Meta (formerly Facebook), Microsoft, and Google are investing heavily in its development. The Metaverse could become a central part of daily life, creating new ways for people to work, socialize, and engage with content. However, careful attention to privacy, security, and accessibility will be crucial in ensuring it benefits everyone.
<br/>
<br/>
<b>In conclusion,</b> the Metaverse offers an exciting new frontier for digital interaction, creativity, and commerce, but it will require careful development and regulation to reach its full potential. As it evolves, it may redefine how we experience the virtual world, blending the digital and physical in ways we’ve only begun to imagine.
</p>
</div>



<div className = "bg-white ml-[2rem] py-[5rem] h-max width-[50%]">
      <h1 className = "text-[32px]">Leave a Comment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className = "py-[0.5rem]  px-[1rem] my-[1rem]  border border-gray-500 hover:border-black"
          />
        </div>
        <div>
          
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
            className = "py-[0.5rem] px-[1rem] my-[1rem] border border-gray-500 hover:border-black"
          ></textarea>
        </div>
        <button type="submit" className = "text-[16px] w-[8rem] h-[3rem] bg-black text-white">Submit</button>
      </form>
    </div>
</div>
        </>
    )
}