"use client"
import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs'
import {CgMenuLeft,CgMenuRight} from 'react-icons/cg';
import {Discover,HelpCenter,Notification,Profile,SideBar} from '../index'
import {Button} from'../componentindex';
import images from '../../../img'
import {TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';
import Nav from './LandingPage'
// import '../../styles/globals.css'
const NavBar = () => {
  // "USE STATE"
  const [discover, setdiscover] = useState(false);
  const [help, sethelp] = useState(false)
  const [notification, setnotification] = useState(false)
  const [profile, setprofile] = useState(false)
  const [opensidemenu, setopensidemenu] = useState(false)
  const [loginorsign,setloginsign] = useState(false);
  //For Side Bar
  const router = useRouter();
  const handlelogin =()=>{
    router.push('/Login');
  }
  const [opendiscoversidebar, setopendiscoversidebar] = useState(false);
  const [openhelpsidebar, setopenhelpsidebar] = useState(false);
   // Discover Navigation Menu
   const discoverobj = [
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
  //HelpCenter
  const helpcenterobj=[
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
  // const router1 = useRouter();
  // const gotologin=()=>{
  //   setTimeout(()=>{
  //     router.push("/Support");
  //   },1000)
  // }
  const opendiscovermenu=()=>{
    if(!opendiscoversidebar){
      setopendiscoversidebar(true);
    }
    else{
      setopendiscoversidebar(false);
    }
  }
    const openhelpmenu=()=>{
      if(!openhelpsidebar){
        setopenhelpsidebar(true);
      }else{
      setopenhelpsidebar(false);
      }
    }

  // Onclick
  const opendiscover =(e)=>{
    const btntext = e.target.innerText;
    if(!discover){
      setdiscover(true);
      sethelp(false);
      setnotification(false);
      setprofile(false);
    }else{
      setdiscover(false);
      sethelp(false);
      setnotification(false);
      setprofile(false);
      console.log("working");
    }
  }

  const openhelp=(e)=>{
    if(!help){
      setdiscover(false);
      sethelp(true);
      setnotification(false);
      setprofile(false);
    }else{
      setdiscover(false);
      sethelp(false);
      setnotification(false);
      setprofile(false);
      console.log("working");
    }
  }
  const opennotification=(e)=>{
    if(!notification){
      setnotification(true);
      setdiscover(false);
      sethelp(false);
      setprofile(false);
    }
    else{
      setnotification(false);
    }
  }

  const openprofile=()=>{
    if(!profile){
      setdiscover(false);
      setprofile(true);
      sethelp(false);
      setnotification(false);
    }
    else{
      setprofile(false);
    }
  }

  const switchloginorsign =()=>{
    if(loginorsign){
    setloginsign(false);
    }
  }
  const opensidebar=()=>{
    if(!opensidemenu){
      setopensidemenu(true);
    }else{
      setopensidemenu(false);
    }
  }


  // const handleLoginClick = () => {
  //   router.push('/Support');
  // };
  return ( 
    <div className="z-50 py-3 w-full bg-white-700 border border-b border-gray-300 ">
    <div className="sm:w-full md:place-content-center md:px-5 items-center grid grid-cols-3 ">
      <div className=' grid col-span-2 md:col-span-1 items-center'>
        <div className="col-span-5 pl-10 hidden  sm:flex justify-centers "><Image src={images.PulseTopup} alt='NFT MARKET PLACE' width={50} height={50}/></div>
        
      </div>
      {/* END OF LEFT SECTION */}
      <div className="md:grid sm:grid-cols-12  w-full col-span-2 sm:items-center hidden ">
        <div className="col-span-1  justify-center flex ">

           {/* "DISCOVER MENU"  */}
          <p onClick={(e)=>{opendiscover(e)}} className="font-medium text-lg  hover:scale-110   text-black cursor-pointer"> <Link href='true5g'>True5G</Link></p>
          {/* {discover && (
            <div className="border border-gray-100 absolute top-20 w-48 shadow-3xl rounded-lg items-center justify-around flex "><Discover/></div>
          )} */}
        </div>


         {/* NOTIFICATION CENTER"  */}
        <div className="md:col-span-1  col-span-1 justify-center flex ">
          <p className="font-medium text-lg  md:pl-10 hover:scale-110 text-black cursor-pointer">Bills</p>
          {/* <MdNotifications className="cursor-pointer" onClick={(e)=>{(opennotification(e))}}/> */}
        </div>
        <div className="md:col-span-2 col-span-1 justify-center flex ">
          <p className="text-lg hover:scale-110 text-black cursor-pointer">History</p>
          {/* <MdNotifications className="cursor-pointer" onClick={(e)=>{(opennotification(e))}}/> */}
        </div>
        <div className="md:col-span-1 col-span-2 justify-center flex px-5 ">
          <p className="font-medium text-lg hover:scale-110 pl-3 text-black cursor-pointer"><Link href='Support'>Support</Link></p>
          {/* <MdNotifications className="cursor-pointer" onClick={(e)=>{(opennotification(e))}}/> */}

            {/* {
              notification&& 
              <div className="border border-gray-100 absolute top-20 w-45 shadow-3xl rounded-lg px-11 items-stretch justify-center flex"><Notification /></div>
            } */}
      
        </div>
        <div className="md:col-span-2  col-span-2 justify-center flex ">
          <p className="font-medium text-lg hover:scale-110 text-black cursor-pointer">About us</p>
          {/* <MdNotifications className="cursor-pointer" onClick={(e)=>{(opennotification(e))}}/> */}
        </div>
        <div className="col-span-1"></div>
        {/* "BUTTON COMPONENT"  */}
        {/* <div className="col-span-2 justify-center flex font-semibold cursor-pointer ">
          <Button className="border border-black h-3 w-5"  btnName="Create" handleClick={()=>{}}/>
        </div> */}
        {/* <div className="col-span-1"></div> */}
        {/* <div classNa  me=" "><input className="w-full border border-black rounded-md" type="text"  placeholder=""/></div> */}
        <div className=" pl-1 cursor-pointer "><BsSearch className=" hover:scale-110 " onClick={()=>{}}/></div>
         {/* "User Profile"  */}
        <div className="col-span-1 justify-center flex cursor-pointer ">
          <div className="">{profile&&<Image src={images.user1} className="rounded-3xl" alt="Profile" width={40} height={40} onClick={()=>openprofile()} />}
          {/* {profile && <div className="border border-gray-100 absolute top-20 right-14 w-60 shadow-3xl rounded-lg py-4 pr-1 items-stretch justify-center flex"> <Profile/> </div>} */}
          {!profile&&<div className='border border-white px-5 py-2 rounded-lg text-white  bg-blue-600 hover:bg-blue-800'><p onClick={()=>handlelogin()}>Login</p></div>}
          </div>
        </div>
        {/* "MENU bUTTON"  */}
      </div>
        <div className="md:hidden flex pr-5 justify-end ">
          <CgMenuRight onClick={()=>{opensidebar()}}/>
        </div>
    </div>
    {
      opensidemenu&&
      (<div className="absolute pt-2">
        <SideBar setopensidemenu={setopensidemenu}  />
      </div>)
    }
    {/* <Nav/> */}
  </div> 
  )
}

export default NavBar



  //   <div className="w-full p-6 grid grid-cols-12">
  //   {/* This div should be visible only on small screens */}
  //   <div className="col-span-3 sm:hidden border border-solid h-5 w-5 bg-blue-700">
  //     <CgMenuRight onClick={() => { opensidebar() }} />
  //   </div>
  
  //   {/* Sidebar component */}
  //   {opensidemenu && (
  //     <div className="col-span-12 sm:col-span-9">
  //       <SideBar setopensidemenu={setopensidemenu} />
  //     </div>
  //   )}
  // </div>