"use client"
import Image from "next/image";
import {useState} from "react";
export default function Blockchain(){

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
  <h1 className="text-[32px] font-bold my-[1rem]">Blockchain Beyond Cryptocurrencies</h1>
  <Image 
            src="/assets/Blockchain Beyond Cryptocurrencies.jpg" 
            alt="" 
            width={800} 
            height={600} 
            className="w-[800px] h-[600px] my-[1rem] object-cover" />
        <p className="text-[20px]">Blockchain technology, most widely known for its association with cryptocurrencies like Bitcoin and Ethereum, has evolved far beyond digital currencies. Originally designed to enable secure, decentralized financial transactions, blockchain has captured the attention of industries worldwide for its potential to revolutionize various sectors. This article explores how blockchain is being used beyond cryptocurrencies and its transformative potential in diverse fields.
<br/>
<br/>
<b className="text-[24px]">Understanding Blockchain Technology</b>
At its core, blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers in such a way that the registered transactions cannot be altered retroactively. Each block in the chain contains a record of transactions, and each subsequent block is cryptographically linked to the previous one, ensuring the integrity and transparency of the entire system.
<br/>
The key features that make blockchain attractive are:
<ul>
    <li><b>Decentralization:</b> No central authority governs blockchain networks. Instead, a distributed network of nodes (computers) validates transactions.</li>
    <li><b>Transparency:</b> Blockchain is open and accessible to all participants, providing transparency.
    </li>
    <li><b>Immutability:</b>Once recorded, data cannot be changed, ensuring a permanent and tamper-resistant record.</li>
</ul>
<br/>
<b className="text-[24px]">Blockchain in Finance Beyond Cryptocurrencies</b> <br/>
While cryptocurrencies are the most famous application of blockchain, the technology has numerous applications in traditional finance as well. Blockchain can streamline financial services, reduce fraud, and offer greater transparency in areas such as cross-border payments, insurance, and asset management.
<br/>
For example, Ripple, a blockchain-based payment network, is designed to enable fast, low-cost cross-border payments. Similarly, blockchain technology is being explored to improve transparency in insurance claims, reduce settlement times for financial transactions, and automate compliance with regulatory requirements.
<br/>
<br/>
<b className="text-[24px]">Blockchain in Supply Chain Management</b> <br/>
One of the most promising applications of blockchain beyond cryptocurrencies is in supply chain management. Traditional supply chains often suffer from inefficiencies, fraud, lack of transparency, and a lack of real-time tracking. Blockchain can address these issues by providing a transparent, tamper-proof ledger of every transaction, making it easier to trace the origin of products, monitor their movement, and confirm their authenticity.
<br/>
For example, companies like Walmart and IBM are leveraging blockchain to enhance traceability and transparency in the food supply chain. With blockchain, consumers can trace the journey of their food from farm to table, ensuring the quality and safety of products.
<br/>
<br/>
<b className="text-[24px]">The Future of Blockchain</b> <br/>
As technology continues to evolve, these challenges are likely to be addressed through innovation and collaboration. New consensus mechanisms (like Proof of Stake) are being developed to reduce energy consumption, and regulatory frameworks are beginning to take shape in several countries. The interoperability between different blockchain networks is also improving, allowing for more seamless integration across industries.
<br/>
<br/>
<b>In conclusion,</b> Blockchain technology is no longer just the backbone of cryptocurrencies; its potential applications across various industries are vast and transformative. From supply chains and healthcare to voting systems and intellectual property protection, blockchain has the power to enhance transparency, security, and efficiency. As these use cases mature and the challenges are overcome, blockchain is poised to reshape industries and create new opportunities in the coming decades. The future of blockchain lies not just in its financial applications, but in its ability to solve complex problems and drive innovation across society.
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