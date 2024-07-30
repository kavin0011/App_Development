// components/Footer.js

import Link from 'next/link';
import React from 'react';
import {TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-8">
      <div className="container px-28 flex pt-16 bg-blue-600 justify-between">
        <div className="w-full sm:w-1/4 px-4 mb-6">
          <h5 className="text-lg font-bold font-montserrat mb-2">Programs</h5>
          <ul>
            <li className="mb-1"><a href="#" className="hover:underline font-montserrat">Corporate</a></li>
            <li className="mb-1"><a href="#" className="hover:underline font-montserrat">One to One</a></li>
            <li className="mb-1"><a href="#" className="hover:underline font-montserrat">Consulting</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 px-4 mb-6">
          <h5 className="text-lg font-bold font-montserrat mb-2">Service</h5>
          <ul>
            <li className="mb-1"><a href="#" className="hover:underline font-montserrat">Mobile recharge</a></li>
            <li className="mb-1"><a href="#" className="hover:underline font-montserrat">fiber</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">Consulting</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 px-4 mb-6">
          <h5 className="text-lg font-bold font-montserrat mb-2">Contact</h5>
          <ul>
            <li className="mb-1 font-montserrat"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-1 font-montserrat"><Link href='/components/About'>About</Link></li>
            <li className="mb-1 font-montserrat"><Link href='/components/Support'>Support</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 px-4 mb-6">
          <h5 className="text-lg font-bold font-montserrat mb-2">Newsletter</h5>
          <form className="flex">
            <input type="email" placeholder="Email Address" className="p-2 w-full rounded-l-md text-black" />
            <button type="submit" className="bg-orange-500 text-white p-2 rounded-r-md">Subscribe</button>
          </form>
          <div className="mt-4 flex space-x-2">
          <TiSocialFacebook className="size-8 cursor-pointer" />
        <TiSocialLinkedin className='size-8 cursor-pointer'/>
        <TiSocialTwitter className='size-8 pt-1 cursor-pointer'/>
        <TiSocialYoutube className='size-8 pt-1 cursor-pointer'/>
        <TiSocialInstagram className='size-8 pt-1 cursor-pointer'/>
          </div>
          <div className="mt-4">
            <p>Mobile: +917892474250</p>
            <p>Email: support@pulsetopup.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react'
// import Image from 'next/image'
// import {RiSendPlaneFill} from 'react-icons/ri'
// import images from '../../../img';
// const Footer = () => {
//   return (
//     <div className="">

//     <div className="bg-blue-500 w-full pb-10 pt-10 flex justify-around">
//       <div className="col-span-3">
//         <p className="pl-5 font-rajdhani">Payment</p>
//       </div>
//       <div className="col-span-4">
//         <p className="font-nunito text-sm text-white font-normal pb-2 ">Subscribe to know about offers</p>
//         <input type='email' placeholder="email" className="border border-slate-600 rounded-sm" />
//       </div>
//       <div className="col-span-3">
//       <p className="pl-8 font-montserrat text-lg font-bold text-white">Keep in touch</p>
//       <div className="flex gap-2 ">

//         </div>
//       </div> 
//       </div>
//     </div>
//   )
// }

// export default Footer





















//    <div className="col-span-3"></div>
//   <div className="col-span-5 pt-12 pb-5 flex flex-col gap-3 ">
//     <h1 className="font-semibold text-lg" >Our Providers</h1>
//     <p className="p-y1  text-black font-semibold">
//     <p>Airtel</p>
//     <p>Jio</p>
//     <p>BSNl</p>
//     <p>Vodafone</p>
//     <p>NTLN</p>
//     </p>
//   </div>
//   <div className="pt-16 col-span-4">
//     <h1 className="font-semibold text-lg pl-11">Contact Us</h1>
// </div>