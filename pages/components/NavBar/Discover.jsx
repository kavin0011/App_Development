import React from 'react'

import Link from 'next/link';

const Discover = () => {
  // Discover Navigation Menu
  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"Author Profile",
      link:"author profile"
    },
    {
      name:"NFT Details",
      link:"NFT-details"
    },
    {
      name:"Account Setting",
      link:"account-setting"
    },
    {
      name:"Connect Wallet",
      link:"connect-wallet"
    },
    {
      name:"Blog",
      link:"blog"
    }
  ]
  return (
    <div >{
      discover.map((e,k)=>(
        <div key={k+1} className="py-1 flex font-inter hover:bg-slate-400 rounded-lg hover:font-bold w-full px-10"><Link href={{pathname:`${e.link}`}}>{e.name}</Link></div>
      ))
    }
      </div>
  )
}

export default Discover