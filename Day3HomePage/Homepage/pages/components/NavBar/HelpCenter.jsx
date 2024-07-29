import React from 'react'

import Link from 'next/link'
const HelpCenter = () => {
  
  const helpcenter=[
    {
      name:"About",
      link:"about"
    },
    {
      name:"Contact Us",
      link:"contact-us"
    },
    {
      name:"Sign Up",
      link:"sign-up"
    },
    {
      name:"Sign In",
      link:"sign-in"
    },
    {
      name:"Subscription",
      link:"subscription"
    },
  ]
  return (
    <div>{
      helpcenter.map((e,k)=>(
        <div key={k+1} className="font-inter"><Link href={{pathname:`${e.link}`}}>{e.name}</Link></div>
      ))
    }
    </div>
  )
}

export default HelpCenter